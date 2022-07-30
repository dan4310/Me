#!/bin/bash

logpath=$(docker inspect --format='{{.LogPath}}' $1)

if [ ! -z "$logpath" ]
then
	cat $logpath
fi

