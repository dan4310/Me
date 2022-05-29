#!/bin/bash

projpath="src/public/projects/filmcritic.html"
temppath="src/templates/project.html"

jq -c '.[]' src/public/js/projects.json | while read i; do
    id=$(jq -r '.id' <<< $i)
    filename=src/public/projects/$(jq -r '.fileName' <<< $i).html
    title=$(jq -r '.title' <<< $i)
    description=$(jq -r '.description' <<< $i)
    cp $temppath $filename
    t='$TITLE'
    d='$DESCRIPTION'
    sed -i "s/$t/$title/g" $filename
    sed -i "s/$d/$description/g" $filename
    echo "$id - project $title created at $filename"
done

