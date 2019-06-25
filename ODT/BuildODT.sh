#!/bin/bash

export PATH=${PATH}:/usr/bin
export JAVA_HOME=/usr/bin

export MYCLASSPATH=build/*

if [ -d ./build ]; then
        rm -rf build
fi

mkdir build

set -x
for i in infra main test; do
        [ -d build/$i ] && rm -rf build/$i
        mkdir build/$i
        javac -d build/$i -cp .:${MYCLASSPATH}:thdpty/JUnit-4.13/*:thdpty/selenium-java-3.141.59/libs/*:thdpty/selenium-java-3.141.59/* src/bri/brico2/selenium/$i/*.java
        cd build/$i
        jar cvf $i.jar *
        cd ..
        mv $i/$i.jar .
        rm -rf $i
        cd ..
done




