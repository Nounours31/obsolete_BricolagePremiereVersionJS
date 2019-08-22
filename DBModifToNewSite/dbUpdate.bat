@echo on

set DB_USER=root
set DB_PASSWD=""
set DB_NAME=cedssectbrico

rem mysql --user=%DB_USER% --password=%DB_PASSWD% %DB_NAME% < script.sql > output.tab

set sql="select * from user where (email like '%%pfs%%')" 
echo %sql:"=% > e:\tmp\test.sql
e:\programfiles\wamp3.1.9_64\bin\mariadb\mariadb10.3.14\bin\mysql.exe --user=%DB_USER% --password=%DB_PASSWD% %DB_NAME% < e:\tmp\test.sql

set sql="CREATE TABLE IF NOT EXISTS `user_invitation` ("
set sql="%sql%  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,"
set sql="%sql%  `guid` text COLLATE utf8_bin,"
set sql="%sql%  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,"
set sql="%sql%  `uidUser` int(11) DEFAULT NULL,"
set sql="%sql%  `status` enum('envoye','consome','autre') COLLATE utf8_bin DEFAULT NULL,"
set sql="%sql%  PRIMARY KEY (`uid`)"
set sql="%sql%) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=46 ;"
echo %sql:"=% > e:\tmp\test.sql
e:\programfiles\wamp3.1.9_64\bin\mariadb\mariadb10.3.14\bin\mysql.exe --user=%DB_USER% --password=%DB_PASSWD% %DB_NAME% < e:\tmp\test.sql

set sql="describe `user_invitation`"
echo %sql:"=% > e:\tmp\test.sql
e:\programfiles\wamp3.1.9_64\bin\mariadb\mariadb10.3.14\bin\mysql.exe --user=%DB_USER% --password=%DB_PASSWD% %DB_NAME% < e:\tmp\test.sql
