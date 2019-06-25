#!/bin/bash

export PATH=${PATH}:/usr/bin
export JAVA_HOME=/usr/bin

java -cp .:build/*:thdpty/JUnit-4.13/*:thdpty/selenium-java-3.141.59/libs/*:thdpty/selenium-java-3.141.59/* org.junit.runner.JUnitCore bri.brico2.selenium.test.Test1
