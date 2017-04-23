/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


/*
 * ChromeWorker Object subprocess.jsm on Unix-like systems (Linux, Mac OS X, ...)
 * to process stdin/stdout/stderr on separate threads.
 *
 */

// Being a ChromeWorker object, implicitly uses the following:
// Components.utils.import("resource://gre/modules/ctypes.jsm");

/* global ctypes: false, onmessage: true */

"use strict";

const BufferSize = 1024;
const MaxBufferLen = 102400;

var libc = null;
var libcFunc = {};
var WritePipeHandle = null;


/*
    struct pollfd {
         int    fd;       // file descriptor
         short  events;   // events to look for
         short  revents;  // events returned
     };
*/

var pollfd = new ctypes.StructType("pollfd", [{
  'fd': ctypes.int
}, {
  'events': ctypes.short
}, {
  'revents': ctypes.short
}]);

var WriteBuffer = ctypes.uint8_t.array(BufferSize);
var ReadBuffer = ctypes.uint8_t.array(BufferSize);


const POLLIN = 0x0001;
const POLLOUT = 0x0004;

const POLLERR = 0x0008; // some poll error occurred
const POLLHUP = 0x0010; // file descriptor was "hung up"
const POLLNVAL = 0x0020; // requested events "invalid"

const WNOHANG = 0x01;

const ECHILD = 10;
const EPIPE = 32; /* Broken pipe */

const EAGAIN = 35; /* Resource temporarily unavailable */
const EINPROGRESS = 36; /* Operation now in progress */
const EALREADY = 37; /* Operation already in progress */

const pid_t = ctypes.int32_t;

const INDEFINITE = -1;
const NOWAIT = 0;
const WAITTIME = 200; // wait time for poll() in ms

function initLibc(libName) {
  postMessage({
    msg: "debug",
    data: "initialising library with " + libName
  });

  libc = ctypes.open(libName);

  libcFunc.pollFds = pollfd.array(1);

  // int poll(struct pollfd fds[], nfds_t nfds, int timeout);
  libcFunc.poll = libc.declare("poll",
    ctypes.default_abi,
    ctypes.int,
    libcFunc.pollFds,
    ctypes.unsigned_int,
    ctypes.int);

  //ssize_t write(int fd, const void *buf, size_t count);
  // NOTE: buf is declared as array of unsigned int8 instead of char to avoid
  // implicit charset conversion
  libcFunc.write = libc.declare("write",
    ctypes.default_abi,
    ctypes.int,
    ctypes.int,
    WriteBuffer,
    ctypes.int);

  //int read(int fd, void *buf, size_t count);
  libcFunc.read = libc.declare("read",
    ctypes.default_abi,
    ctypes.int,
    ctypes.int,
    ReadBuffer,
    ctypes.int);

  //int pipe(int pipefd[2]);
  libcFunc.pipefd = ctypes.int.array(2);

  //int close(int fd);
  libcFunc.close = libc.declare("close",
    ctypes.default_abi,
    ctypes.int,
    ctypes.int);

  //pid_t waitpid(pid_t pid, int *status, int options);
  libcFunc.waitpid = libc.declare("waitpid",
    ctypes.default_abi,
    pid_t,
    pid_t,
    ctypes.int.ptr,
    ctypes.int);
}

function createNpeError() {
  let e = new Error("NULL Poiner", "npeError", 1);
  postMessage({
    msg: "error",
    data: "Got NULL pointer error\n" + e.stack
  });

  return;
}

function closePipe(pipe) {
  if (!pipe) {
    createNpeError();
    return;
  }

  libcFunc.close(pipe);
}

function writePipe(pipe, data) {

  postMessage({
    msg: "debug",
    data: "trying to write to " + pipe
  });

  let numChunks = Math.floor(data.length / BufferSize);
  let pData = new WriteBuffer();

  for (var chunk = 0; chunk <= numChunks; chunk++) {
    let numBytes = chunk < numChunks ? BufferSize : data.length - chunk * BufferSize;
    for (var i = 0; i < numBytes; i++) {
      pData[i] = data.charCodeAt(chunk * BufferSize + i) % 256;
    }

    let bytesWritten = libcFunc.write(pipe, pData, numBytes);

    if (bytesWritten != numBytes) {
      postMessage({
        msg: "error",
        data: "error: write failed, errno=" + ctypes.errno
      });
      closePipe(pipe);
      libc.close();
      close();
    }
  }
  postMessage({
    msg: "info",
    data: "wrote " + data.length + " bytes of data"
  });
}


function readString(data, length, charset) {
  var r = '';
  for (var i = 0; i < length; i++) {
    if (data[i] === 0 && charset != "null") // stop on NULL character for non-binary data
      break;

    r += String.fromCharCode(data[i]);
  }

  // For non-UTF-8 strings, the next read always starts at the beginning.
  data[0] = 0;
  return r;
}

function readUtf8(data, length) {
  // This function provides better performance for UTF-8 strings by using
  // the readStringReplaceMalformed() method available on CData string
  // objects. Before we can call it, though, we have to check the end of
  // the string to see if we only read part of a multi-byte character.
  var endChar = [];
  if (data[length - 1] >= 0x80) {
    // Collect all bytes from the last character if it's a non-ASCII.
    for (let i = length - 1; i >= 0; i--) {
      endChar.unshift(data[i]);
      if (data[i] >= 0xc0) break;
    }
    // Find out how long the character should be from the first byte.
    var leadingOne = 0x20;
    var numBytes = 2;
    while (endChar[0] & leadingOne) {
      numBytes++;
      leadingOne >>= 1;
    }
    // If we read the full character, we don't need to do anything special.
    if (endChar.length == numBytes) endChar = [];
  }
  // Mark the end of the string, excluding any trailing partial character.
  data[length - endChar.length] = 0;
  var r = data.readStringReplaceMalformed();
  // Place the partial character at the beginning for the next read.
  let i = 0;
  endChar.forEach(function(v) {
    data[i++] = v;
  });
  // Place a null character to mark where the next read should start.
  data[i] = 0;
  return r;
}

function readPipe(pipe, charset, pid, bufferedOutput) {
  var p = new libcFunc.pollFds();
  p[0].fd = pipe;
  p[0].events = POLLIN | POLLERR | POLLHUP;
  p[0].revents = 0;
  var pollTimeout = WAITTIME;
  var exitCode = -1;
  var readCount = 0;
  var result, status = ctypes.int();
  result = 0;

  var dataStr = "";
  var dataObj = {};
  var line = new ReadBuffer();

  const i = 0;
  while (true) {
    if (result === 0) {
      result = libcFunc.waitpid(pid, status.address(), WNOHANG);
      if (result > 0) {
        pollTimeout = NOWAIT;
        exitCode = parseInt(status.value, 10);
        postMessage({
          msg: "exitCode",
          data: exitCode
        });
      }
      else if (result < 0) {
        postMessage({
          msg: "debug",
          data: "waitpid returned with errno=" + ctypes.errno
        });
        if (ctypes.errno == ECHILD) {
          pollTimeout = NOWAIT;
        }
      }
    }
    p[i].revents = 0;
    var r = libcFunc.poll(p, 1, pollTimeout);
    if (pollTimeout == NOWAIT) {
      readCount = 0;
    }
    if (r > 0) {
      if (p[i].revents & POLLIN) {
        // postMessage({msg: "debug", data: "reading next chunk"});

        readCount = readPolledFd(p[i].fd, line, charset, dataObj);
        if (!bufferedOutput)
          postMessage({
            msg: "data",
            data: dataObj.value,
            count: dataObj.value.length
          });
        else {
          dataStr += dataObj.value;
          if (dataStr.length > MaxBufferLen) {
            postMessage({
              msg: "data",
              data: dataStr,
              count: dataStr.length
            });
            dataStr = "";
          }
        }
        if (readCount === 0) break;
      }

      if (p[i].revents & POLLHUP) {
        postMessage({
          msg: "debug",
          data: "poll returned HUP"
        });
        break;
      }
      else if (p[i].revents & POLLERR) {
        postMessage({
          msg: "error",
          data: "poll returned error"
        });
        break;
      }
      else if (p[i].revents != POLLIN) {
        postMessage({
          msg: "error",
          data: "poll returned " + p[i]
        });
        break;
      }
    }
    else
    if (pollTimeout == NOWAIT || r < 0) break;
  }

  // continue reading until the buffer is empty
  while (readCount > 0) {
    readCount = readPolledFd(pipe, line, charset, dataObj);
    if (!bufferedOutput)
      postMessage({
        msg: "data",
        data: dataObj.value,
        count: dataObj.value.length
      });
    else
      dataStr += dataObj.value;

    libcFunc.poll(p, 1, NOWAIT);
  }

  if (bufferedOutput)
    postMessage({
      msg: "data",
      data: dataStr,
      count: dataStr.length
    });

  libcFunc.close(pipe);
  postMessage({
    msg: "done",
    data: exitCode
  });
  libc.close();
  close();
}

function readPolledFd(pipe, line, charset, dataObj) {
  // Start reading at first null byte (line might begin with an
  // incomplete UTF-8 character from the previous read).
  var offset = 0;
  while (line[offset] !== 0) offset++;
  var r = libcFunc.read(pipe, line.addressOfElement(offset), BufferSize - offset - 1);

  if (r > 0) {
    var readStringFunc = charset == "UTF-8" ? readUtf8 : readString;
    var c = readStringFunc(line, r + offset, charset);
    dataObj.value = c;
  }
  else
    dataObj.value = "";

  return r;
}

onmessage = function(event) {
  switch (event.data.msg) {
    case "init":
      if (!event.data.pipe) {
        createNpeError();
        return;
      }
      WritePipeHandle = event.data.pipe;
      initLibc(event.data.libc);
      postMessage({
        msg: "info",
        data: "InitOK"
      });
      break;
    case "read":
      if (!event.data.pipe) {
        createNpeError();
        return;
      }

      initLibc(event.data.libc);
      readPipe(event.data.pipe, event.data.charset, event.data.pid, event.data.bufferedOutput);
      break;
    case "write":
      // data contents:
      //   msg: 'write'
      //   data: the data (string) to write
      //   pipe: ptr to pipe

      writePipe(WritePipeHandle, event.data.data);
      postMessage({
        msg: "info",
        data: "WriteOK"
      });
      break;
    case "close":
      postMessage({
        msg: "debug",
        data: "closing input pipe\n"
      });

      closePipe(WritePipeHandle);
      postMessage({
        msg: "info",
        data: "ClosedOK"
      });
      break;
    case "stop":
      libc.close(); // do not use libc after this point
      close();
      break;
    default:
      throw ("error: Unknown command" + event.data.msg + "\n");
  }
  return;
};
