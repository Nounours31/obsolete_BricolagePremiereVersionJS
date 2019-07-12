#!/bin/bash

SCSS_DIR=$1
CSS_DIR=$2

cd ${SCSS_DIR}
for i in $(ls *.scss); do
  echo $i
  j=$(echo $i | cut -c1-1)
  if [ "$j" = "_" -o "$i" = "demo.scss" ]; then
	echo no build of $i
  else
	echo build of $i
	j="$(echo $i | sed -E 's/(.*)(\.scss$)/\1/g').css"
	echo sass --no-source-map --stop-on-error $i ${CSS_DIR}/$j
	sass --no-source-map --stop-on-error $i ${CSS_DIR}/$j
  fi
done
