#!bash

for i in $(ls *.scss); do
  echo $i
  j=$(echo $i | cut -c1-1)
  if [ "$j" = "_" -o "$i" = "demo.scss" ]; then
	echo no build of $i
  else
	echo build of $i
	j="$(echo $i | sed -E 's/(.*)(\.scss$)/\1/g').css"
	echo sass --no-source-map --stop-on-error $i ../CSS/$j
	sass --no-source-map --stop-on-error $i ../CSS/$j
  fi
done