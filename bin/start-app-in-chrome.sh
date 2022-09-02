#!/bin/bash

# If not already started, it starts the Chrome browser pointed to $app_URL

app_URL='http://localhost:3000'

start_cmd="/opt/google/chrome/chrome -app=${app_URL} --start-maximized"
template="\-app=${app_URL}"

pgrep -f "${template}" > /dev/null && {
	echo '[OK] Happy-day Chrome App is already running'
	exit
}

echo '[i] Happy-day Chrome App is not running. Starting it...'
${start_cmd} > /dev/null &

pgrep -f '\-app=http://localhost:3000' > /dev/null && {
	echo '[OK] Happy-day Chrome App has been started'
} || {
	echo '[ERR] Failed to start Happy-day Chrome App'
}
