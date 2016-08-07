# Compile Sass
sass --sourcemap=none skin/glue1.scss:dist/glue1.css

for name in skin/apps/*.scss
  do sudo sass --sourcemap=none $name Apps/$(basename $name .scss)/css/style.css
done

# Filter build/glue1.css into all app dirs
find Apps/. -type d -name "css" -print0 | xargs -0 -I {} sudo cp dist/glue1.css {}

# Download latest Spotify binary and extract it to .tmp
curl https://download.spotify.com/Spotify.dmg --create-dirs -o .tmp/Spotify.dmg
hdiutil attach .tmp/Spotify.dmg
sudo cp -R "/Volumes/Spotify/Spotify.app" .tmp/
sudo chmod -R 755 .tmp/Spotify.app

# Remove all the .spa files in the app
sudo rm -rf .tmp/Spotify.app/Contents/Resources/Apps/*.spa

# Copy over our built App code to the app in .tmp
sudo cp -r "Apps/"* ".tmp/Spotify.app/Contents/Resources/Apps/"

# Move our compiled app into /dist
sudo cp -r ".tmp/Spotify.app" "dist/"

# Chmod again because the chromium embedded framework is a piece of steaming shit
sudo chmod -R 755 dist/Spotify.app

# Final step: unmount and delete our temporary DMG
hdiutil detach /Volumes/Spotify
sudo rm -rf .tmp/Spotify.dmg
sudo rm -rf .tmp/Spotify.app

# Copy style.css files from App folders to skin/apps/_[folder].scss
# for name in Apps/*/*/style.css
#   do cp $name skin/apps/$(name="${name%/*/*}" && echo "${name##*/}").scss
# done
