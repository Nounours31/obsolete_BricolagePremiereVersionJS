@echo on

set PATH=%PATH%;C:\java\jdk1.8.0_144\bin;C:\java\jdk1.8.0_144
set JAVA_HOME=C:\java\jdk1.8.0_144
 
set MYCLASSPATH=build\*
echo %MYCLASSPATH%

mkdir build
rm -rf build\*

rem FOR %%i in (infra) do (
FOR %%i in (infra, main, test) do (
	rm -rf build\%%i
	mkdir build\%%i
	javac -d build\%%i -cp .;%MYCLASSPATH%;thdpty\JUnit-4.13\*;thdpty\selenium-java-3.141.59\libs\*;thdpty\selenium-java-3.141.59\* src\bri\brico2\selenium\%%i\*.java 
	cd build\%%i
	jar cvf %%i.jar *
	cd ..
	mv %%i\%%i.jar .
	rm -rf %%i
	cd ..
)
