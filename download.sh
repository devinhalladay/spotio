# For downloading the latest version of the Spotify app binary

# Delete old binary stuff if it exists
sudo rm -rf .tmp/Spotify.dmg
sudo rm -rf .tmp/Spotify.app

# Download latest Spotify binary and extract it to .tmp
curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
hdiutil attach .tmp/Spotify.dmg
sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
# sudo chmod -R 755 .tmp/Spotify.app

# Final step: unmount and delete our temporary DMG
hdiutil detach /Volumes/Spotify
