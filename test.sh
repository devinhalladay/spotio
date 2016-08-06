for D in `find Apps -type d -maxdepth 1 -mindepth 1`
do
  tar -cvf $D.zip $D
done

# pushd Unwanted1/Unwanted2
# zip -r ~/new.zip wanted
# popd
