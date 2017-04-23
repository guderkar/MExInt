/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


/*
 * ChromeWorker Object subprocess.jsm on Windows to process stdin/stdout/stderr
 * on separate threads.
 *
 */

// Being a ChromeWorker object, implicitly uses the following:
// Components.utils.import("resource://gre/modules/ctypes.jsm");

/* global ctypes: false, onmessage: true */

"use strict";

const BufferSize = 1024;
const MaxBufferLen = 102400;

const BOOL = ctypes.bool;
const HANDLE = ctypes.size_t;
const DWORD = ctypes.uint32_t;
const LPDWORD = DWORD.ptr;
const PVOID = ctypes.voidptr_t;
const LPVOID = PVOID;

/*
typedef struct _OVERLAPPED {
  ULONG_PTR Internal;
  ULONG_PTR InternalHigh;
  union {
    struct {
      DWORD Offset;
      DWORD OffsetHigh;
    };
    PVOID  Pointer;
  };
  HANDLE    hEvent;
} OVERLAPPED, *LPOVERLAPPED;
*/
const OVERLAPPED = new ctypes.StructType("OVERLAPPED");

var ReadFileBuffer = ctypes.uint8_t.array(BufferSize);
var WriteFileBuffer = ctypes.uint8_t.array(BufferSize);

var kernel32dll = null;
var libFunc = {};

function initLib(libName) {
  var WinABI;
  if (ctypes.size_t.size == 8) {
    WinABI = ctypes.default_abi;
  }
  else {
    WinABI = ctypes.winapi_abi;
  }

  kernel32dll = ctypes.open(libName);

  /*
  BOOL WINAPI WriteFile(
    __in         HANDLE hFile,
    __in         LPCVOID lpBuffer,
    __in         DWORD nNumberOfBytesToWrite,
    __out_opt    LPDWORD lpNumberOfBytesWritten,
    __inout_opt  LPOVERLAPPED lpOverlapped
  );

  NOTE: lpBuffer is declared as array of unsigned int8 instead of char to avoid
         implicit charset conversion
  */
  libFunc.WriteFile = kernel32dll.declare("WriteFile",
    WinABI,
    BOOL,
    HANDLE,
    WriteFileBuffer,
    DWORD,
    LPDWORD,
    OVERLAPPED.ptr
  );

  /*
  BOOL WINAPI ReadFile(
    __in         HANDLE hFile,
    __out        LPVOID ReadFileBuffer,
    __in         DWORD nNumberOfBytesToRead,
    __out_opt    LPDWORD lpNumberOfBytesRead,
    __inout_opt  LPOVERLAPPED lpOverlapped
  );
  */
  libFunc.ReadFile = kernel32dll.declare("ReadFile",
    WinABI,
    BOOL,
    HANDLE,
    ReadFileBuffer,
    DWORD,
    LPDWORD,
    OVERLAPPED.ptr
  );

  /*
  BOOL WINAPI CloseHandle(
    __in  HANDLE hObject
  );
  */
  libFunc.CloseHandle = kernel32dll.declare("CloseHandle",
    WinABI,
    BOOL,
    HANDLE
  );
}

// Windows error codes
const ERROR_HANDLE_EOF = 38;
const ERROR_BROKEN_PIPE = 109;

function writePipe(pipe, data) {
  var bytesWritten = DWORD(0);

  var pData = new WriteFileBuffer();

  var numChunks = Math.floor(data.length / BufferSize);
  for (var chunk = 0; chunk <= numChunks; chunk++) {
    var numBytes = chunk < numChunks ? BufferSize : data.length - chunk * BufferSize;
    for (var i = 0; i < numBytes; i++) {
      pData[i] = data.charCodeAt(chunk * BufferSize + i) % 256;
    }

    var r = libFunc.WriteFile(pipe, pData, numBytes, bytesWritten.address(), null);
    if (bytesWritten.value != numBytes)
      throw ("error: wrote " + bytesWritten.value + " instead of " + numBytes + " bytes");
  }
  postMessage("wrote " + data.length + " bytes of data");
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

function readPipe(pipe, charset, bufferedOutput) {
  var dataStr = "";
  var bytesRead = DWORD(0);
  var line = new ReadFileBuffer();
  var readStringFunc = charset == "UTF-8" ? readUtf8 : readString;
  while (true) {
    // Start reading at first null byte (line might begin with an
    // incomplete UTF-8 character from the previous read).
    var offset = 0;
    while (line[offset] !== 0) offset++;
    var r = libFunc.ReadFile(
      pipe, line.addressOfElement(offset), BufferSize - offset - 1,
      bytesRead.address(), null
    );

    if (!r) {
      // stop if we get an error (such as EOF reached)
      let lastErr = ctypes.winLastError;
      switch (lastErr) {
        case ERROR_HANDLE_EOF:
        case ERROR_BROKEN_PIPE:
          postMessage({
            msg: "info",
            data: "EOF reached"
          });
          break;
        default:
          postMessage({
            msg: "error",
            data: "Windows error " + lastErr
          });
      }
      break;
    }

    if (bytesRead.value > 0) {
      var c = readStringFunc(line, bytesRead.value + offset, charset);
      if (!bufferedOutput)
        postMessage({
          msg: "data",
          data: c,
          count: c.length
        });
      else {
        dataStr += c;
        if (dataStr.length > MaxBufferLen) {
          postMessage({
            msg: "data",
            data: dataStr,
            count: dataStr.length
          });
          dataStr = "";
        }
      }
    }
    else {
      break;
    }
  }

  if (bufferedOutput)
    postMessage({
      msg: "data",
      data: dataStr,
      count: dataStr.length
    });

  libFunc.CloseHandle(pipe);
  postMessage({
    msg: "done"
  });
  kernel32dll.close();
  close();
}

onmessage = function(event) {
  let pipePtr;
  switch (event.data.msg) {
    case "init":
      initLib(event.data.libc);
      postMessage("InitOK");
      break;
    case "write":
      // data contents:
      //   msg: 'write'
      //   data: the data (string) to write
      //   pipe: ptr to pipe
      pipePtr = HANDLE.ptr(event.data.pipe);
      writePipe(pipePtr.contents, event.data.data);
      postMessage("WriteOK");
      break;
    case "read":
      initLib(event.data.libc);
      pipePtr = HANDLE.ptr(event.data.pipe);
      readPipe(pipePtr.contents, event.data.charset, event.data.bufferedOutput);
      break;
    case "close":
      pipePtr = HANDLE.ptr(event.data.pipe);
      postMessage("closing stdin\n");

      if (libFunc.CloseHandle(pipePtr.contents)) {
        postMessage("ClosedOK");
      }
      else
        postMessage("Could not close stdin handle");
      break;
    case "stop":
      kernel32dll.close();
      close();
      break;
    default:
      throw ("error: Unknown command" + event.data.msg + "\n");
  }
  return;
};
