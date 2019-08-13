set CURL_HOME=E:\WS\Github\Bricolage2\batches\thirdpty\curl-7.65.2-win64-mingw
set CURL=%CURL_HOME%\bin\curl.exe

call touch %CURL_HOME%\_curlrc

set URI=http://dell2259dsy:88/Bricolage2/server/WS
set VERBOSE=-v
set FOLLOWLINK=-L
set SHOW_ERROR=-S
set TRACE_TIME=--trace-time

set SERVICE2TEST=BRIWSUserServices.php
set MULTIPART=-F person=toto -F secretfile=@fileFormData.txt -H 'Content-Type: multipart/form-data'
set POST=--data 'name=admin&shoesize=12' -H 'Content-Type: application/x-www-form-urlencoded' 
set POST=--data @%SERVICE2TEST%.POST  -H 'Content-Type: application/x-www-form-urlencoded' 


set POST=--data "{ \"requete\": \"init_passwd\", \"args\": [{\"email\": \"d@d.s\"}]}" -H "Content-Type: application/json" 
set OPTIONS=%VERBOSE% %FOLLOWLINK% %SHOW_ERROR% %TRACE_TIME%  %POST%

%CURL% %OPTIONS% %URI%/%SERVICE2TEST%