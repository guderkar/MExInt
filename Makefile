all:
	mkdir -p xpi

	cp node-linux-32/node mexint@karel.gudera/components/
	cd mexint@karel.gudera; zip -r ../mexint-Linux-32.xpi *; cd ..;
	mv mexint-Linux-32.xpi xpi/
	rm -f mexint@karel.gudera/components/node

	cp node-linux-64/node mexint@karel.gudera/components/
	cd mexint@karel.gudera; zip -r ../mexint-Linux-64.xpi *; cd ..;
	mv mexint-Linux-64.xpi xpi/
	rm -f mexint@karel.gudera/components/node

	cp node-osx-64/node mexint@karel.gudera/components/
	cd mexint@karel.gudera; zip -r ../mexint-OSX-64.xpi *; cd ..;
	mv mexint-OSX-64.xpi xpi/
	rm -f mexint@karel.gudera/components/node

	cp node-win-32/node.exe mexint@karel.gudera/components/
	cd mexint@karel.gudera; zip -r ../mexint-Windows-32.xpi *; cd ..;
	mv mexint-Windows-32.xpi xpi/
	rm -f mexint@karel.gudera/components/node.exe

	cp node-win-64/node.exe mexint@karel.gudera/components/
	cd mexint@karel.gudera; zip -r ../mexint-Windows-64.xpi *; cd ..;
	mv mexint-Windows-64.xpi xpi/
	rm -f mexint@karel.gudera/components/node.exe

clean:
	rm -rf xpi
