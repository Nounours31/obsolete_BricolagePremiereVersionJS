#!/bin/bash

export PATH=${PATH}:/usr/bin
export JAVA_HOME=/usr/bin

export BUILD_PLACE=./build_odt
export MYCLASSPATH=${BUILD_PLACE}/*

if [ -d ${BUILD_PLACE} ]; then
        rm -rf ${BUILD_PLACE}
fi
mkdir ${BUILD_PLACE}

set -x
for i in infra main test; do
  echo "ODT Build of $i"
  [ -d ${BUILD_PLACE}/$i ] && rm -rf ${BUILD_PLACE}/$i
  mkdir ${BUILD_PLACE}/$i
  javac -d ${BUILD_PLACE}/$i -cp .:${MYCLASSPATH}:thdpty/JUnit-4.13/*:thdpty/selenium-java-3.141.59/libs/*:thdpty/selenium-java-3.141.59/* src/bri/brico2/selenium/$i/*.java
  cd ${BUILD_PLACE}/$i
  jar cvf $i.jar *
  cd ..
  mv $i/$i.jar .
  rm -rf $i
  cd ..
done
