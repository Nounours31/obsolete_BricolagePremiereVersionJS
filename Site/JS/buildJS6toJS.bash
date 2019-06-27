#!bash

MY_UID=$$
MY_ECHO=""

for i in $(ls *.js6); do
  echo $i
  j=$(echo $i | sed -E 's/(.*).js6$/\1/g')
  if [ -f "${j}.js" ]; then
	${MY_ECHO} mv ${j}.js ${j}.js_${MY_UID}
  fi
  
  ${MY_ECHO} mv ${j}.js6 ${j}.js
done