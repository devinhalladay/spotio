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
rm ./spotify.deb
rm ./data.tar.gz

# Rename .spa file to zip file
find ./usr/share/spotify/Apps/ -iname "*.spa" -exec bash -c 'mv "$0" "${0%\.spa}.zip"' {} \;

# Extract all .zip files
ls ./usr/share/spotify/Apps/*.zip | awk -F'.zip' '{print "unzip -o "$0" -d "$1}' | bash

# Remove all .zip files
rm ./usr/share/spotify/Apps/*.zip

# Copy all necesary files
cp -R ../Apps/* ./usr/share/spotify/Apps/

# Now let's repack everything
find ./usr/share/spotify/Apps/* -maxdepth 0 -type d | awk -F '' '{print "END_DIR=`basename " $0"`; cd " $0 "; zip -q -r ../$END_DIR.spa *; cd ../../../../../ ; rm -r "$0}' | bash

# Create a new md5sum file

# Repack the control files back into control.tar.gz

# Repack all our files into the original data.tar.gz

# Repack into a .deb file
# cd ../
#
# ar m * spotify.deb
#
# cp spotify.deb ../debian
# print "You can now install Spotio with dpkg -i spotify.deb
