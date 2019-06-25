@echo on

set PATH=%PATH%;C:\java\jdk1.8.0_144\bin;C:\java\jdk1.8.0_144
set JAVA_HOME=C:\java\jdk1.8.0_144

java -cp .;build\*;thdpty\JUnit-4.13\*;thdpty\selenium-java-3.141.59\libs\*;thdpty\selenium-java-3.141.59\* org.junit.runner.JUnitCore bri.brico2.selenium.test.Test1
