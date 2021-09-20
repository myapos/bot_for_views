# This script will be used by Jenkins in order to auto update the package version
# For patch update version use "patch" option, for minor update version, for major version use "major"
#!/bin/bash

# declare MODES array
declare -a MODES

# variable initialization
# active mode can get patch, minor, major values

ACTIVE_MODE="patch"
# FOUND flag is used to detect if the active mode is included in the available options
FOUND=false

# modes array contains the available options for the update command
MODES=(patch minor major)

for i in "${MODES[@]}"; 
do 
    # echo "$i"; 
    if [ "$ACTIVE_MODE" == "$i" ]
    then
         echo "active mode is $i"
         npm version "$i"
         git push
         FOUND=true
    fi
done

if [ "$FOUND" = false ]
then
    echo "No supported mode. Available options are (1) patch, (2) minor, (3) major"
fi

