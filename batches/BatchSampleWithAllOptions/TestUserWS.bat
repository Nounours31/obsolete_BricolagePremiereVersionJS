set CURL_HOME=E:\WS\Github\Bricolage2\batches\thirdpty\curl-7.65.2-win64-mingw
set CURL=%CURL_HOME%\bin\curl.exe

call touch %CURL_HOME%\_curlrc

set URI=http://dell2259dsy:88/Bricolage2/server/WS
set VERBOSE=-vLs
set FOLLOWLINK=-L
set CONFIG=-K ./configFile.txt
set USER=-u pfs:Blacky.2001
set SHOW_ERROR=-S
set TRACE_FILE=--trace ./CurlTrace.log 
set TRACE_TIME=--trace-time 
set WRITE_OUT=-w "Type: %{content_type}\nCode: %{response_code}\n"
set OUTPUT=-o ./CurlOutPut.log 

set SERVICE2TEST=BRIWSUserServices.php

set MULTIPART=-F persone=totoLesRoupettes -F secretfile=@fileFormData.txt -H "Content-Type: multipart/form-data"

set POST=--data 'name=admin&shoesize=12' -H 'Content-Type: application/x-www-form-urlencoded' 
set POST=--data '{name:admin,shoesize:12}' -H 'Content-Type: application/json' 
set POST=--data @%SERVICE2TEST%.POST  -H 'Content-Type: application/x-www-form-urlencoded' 



set OPTIONS=%VERBOSE%  %SHOW_ERROR% %TRACE_TIME% %WRITE_OUT% %MULTIPART%

%CURL% %OPTIONS% %URI%/%SERVICE2TEST%