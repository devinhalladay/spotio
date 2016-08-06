# Compile Sass
sass skin/glue1.scss:build/glue1.css
rm -f build/*.map

# Filter build/glue1.css into all app dirs
find Apps/. -type d -name "css" -print0 | xargs -0 -I {} cp build/glue1.css {}

# Convert app dirs to .spa files
# sh spa.sh

# Move everything in apps to build/
cp -r "Apps"/* "build/Apps/"

# Download latest Spotify binary and extract it to .tmp
curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
hdiutil attach .tmp/Spotify.dmg
sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
sudo chmod -R 755 .tmp/Spotify.app

# Remove all the .spa files in the app
sudo rm -rf .tmp/Spotify.app/Contents/Resources/Apps/*.spa

# Copy over our built App code to the app in .tmp
cp -r "build/Apps"/* ".tmp/Spotify.app/Contents/Resources/Apps/"

# Move our compiled app into /build
cp -r ".tmp/Spotify.app" "build/"

# Final step: unmount and delete our temporary DMG
hdiutil detach /Volumes/Spotify
rm -rf .tmp/Spotify.dmg
