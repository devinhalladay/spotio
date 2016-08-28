#!/bin/bash
BASE_URL="http://repository.spotify.com/pool/non-free/s/spotify-client/"

# Figure out what type of ARCH we are running
# Used to match the naming scheme of Spotify
if [ `uname -m` == 'x86_64' ]; then
  ARCH="amd64"
else
  ARCH="i386"
fi

# Get the lastest file with some regex magic! D:
FILE_WE_WANT=`curl -s $BASE_URL | grep $ARCH | tail -1 | grep -oP '"(.*?)"'`
curl $BASE_URL${FILE_WE_WANT:1:-1} --create-dirs -o .tmp/spotify.deb

# Extract the .deb file and remove the "old" deb file
# current directory is now ./tmp/ because ar doesn't support changing the output directory
cd .tmp
ar -x ./spotify.deb
# Extract data.tar.gz
tar -zxf data.tar.gz


# cleanup
#rm ./spotify.deb
#rm ./data.tar.gz

# Rename .spa file to zip file
find ./usr/share/spotify/Apps/ -iname "*.spa" -exec bash -c 'mv "$0" "${0%\.spa}.zip"' {} \;

# Extract all .zip files
ls ./usr/share/spotify/Apps/*.zip | awk -F'.zip' '{print "unzip -o "$0" -d "$1}' | bash

# Remove all .zip files
rm ./usr/share/spotify/Apps/*.zip

# Copy all necesary files
cp ../Apps/* ./usr/share/spotify/

# Now let's repack everything
# ls -d ./usr/share/spotify/Apps/ | awk -F '' '{print "zip ./usr/share/spotify/Apps/"$0".spa ./usr/share/spotify/Apps/"$0"/"}'
# find ./usr/share/spotify/Apps/ -maxdepth 1 -type d | awk -F '' '{print "cd " $0 "; ls -lh; cd ../../../../;" }'
find ./usr/share/spotify/Apps/ -maxdepth 1 -type d | awk -F '' '{print "cd " $0 "; END_DIR=basename " $0"; zip -r ../$END_DIR.spa *; cd ../../../../../" }' # I need a way to figure out how to repack all subdirectories! :(

# Create a new md5sum file

# Repack the control files back into control.tar.gz

# Repack all our files into the original data.tar.gz

# Repack into a .deb file
cd ../

ar m * spotify.deb

cp spotify.deb ../debian
print "You can now install Spotio with dpkg -i spotify.deb"

# Get the
# RAW_MATCING_FILE=`grep -s -q $REMOTE_FILES <<< $ARCH`
# # echo $RAW_MATCING_FILE
#
# grep -s -q $REMOTE_FILES <<< $ARCH

# # Download latest Spotify binary and extract it to .tmp
# curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
# hdiutil attach .tmp/Spotify.dmg
# sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
# sudo chmod -R 755 .tmp/Spotify.app
#
# # Renaming .spa files to .zip files
# find .tmp/Spotify.app/Contents/Resources/Apps/ -iname "*.spa" -exec bash -c 'sudo mv "$0" "${0%\.spa}.zip"' {} \;
#
# # Switch into the new tmp dir and then unzip all .zips to /Apps/
# pushd .tmp/Spotify.app/Contents/Resources/Apps
# ls *.zip|awk -F'.zip' '{print "sudo unzip -o "$0" -d ../../../../../Apps/"$1}'|sh
#
# # Final step: unmount and delete our temporary DMG
# hdiutil detach /Volumes/Spotify
# sudo rm -rf .tmp/*
