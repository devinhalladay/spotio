# Compile Sass
# echo "## Compiling sass from skin/..."
# echo "\n## Processing glue1.scss..."
# sass --sourcemap=none skin/glue1.scss:dist/glue1.css

# echo "## Processing individual App sass..."
# for name in skin/apps/*.scss
#   do sudo sass --sourcemap=none $name Apps/$(basename $name .scss)/css/style.css
# done

# Filter build/glue1.css into all app dirs
# echo "\n## Placing processed glue1.css into all App directories"
# find Apps/. -type d -name "css" -print0 | xargs -0 -I {} sudo cp dist/glue1.css {}

# Remove all the .spa files in the app
# echo "\n## Removing .spa files from Spotify.app"
# sudo rm -rf .tmp/Spotify.app/Contents/Resources/Apps/*.spa

# Copy over our built App code to the app in .tmp
# echo "\n## Moving compiled app code into Spotify.app"
# sudo cp -r "Apps/"* ".tmp/Spotify.app/Contents/Resources/Apps/"

# Move our compiled app into /dist
echo "\n## Moving Spotify.app to dist/"
sudo cp -r ".tmp/Spotify.app" "dist/"

echo "\n## Done! Your customized Spotify.app is available for launch at dist/Spotify.app"

# Chmod again because the chromium embedded framework is a piece of steaming shit
# sudo chmod -R 755 dist/Spotify.app

# Copy style.css files from App folders to skin/apps/_[folder].scss
# for name in Apps/*/*/style.css
#   do cp $name skin/apps/$(name="${name%/*/*}" && echo "${name##*/}").scss
# done
