# Download latest Spotify binary and extract it to .tmp
curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
hdiutil attach .tmp/Spotify.dmg
sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
sudo chmod -R 755 .tmp/Spotify.app

# Renaming .spa files to .zip files
find .tmp/Spotify.app/Contents/Resources/Apps/ -iname "*.spa" -exec bash -c 'sudo mv "$0" "${0%\.spa}.zip"' {} \;

# Switch into the new tmp dir and then unzip all .zips to /Apps/
pushd .tmp/Spotify.app/Contents/Resources/Apps
ls *.zip|awk -F'.zip' '{print "sudo unzip -o "$0" -d ../../../../../Apps/"$1}'|sh

# Final step: unmount and delete our temporary DMG
hdiutil detach /Volumes/Spotify
sudo rm -rf .tmp/*
