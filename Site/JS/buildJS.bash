#!bash

MY_UID=$$
for i in $(ls *.js); do
  echo $i
  if [ -f "${i}6" ]; then
	mv ${i}6 ${i}6_${MY_UID}
  fi
  
  babel ${i} --out-file ${i}5
  mv ${i} ${i}6
  mv ${i}5 ${i}
done