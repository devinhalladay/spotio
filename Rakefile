##################################################
# Compile skin sass to build/glue1.css
##################################################

desc "Filter build/glue1.css into Apps"
task :filterdown do
  require 'fileutils'
  puts "\n## Moving glue1.css into Apps"
  status = system('find Apps/. -type d -name "css" -print0 | xargs -0 -I {} cp build/glue1.css {}')
  puts status ? "Success" : "Failed"
end

desc "Compile Apps directories into .spa template files"
task :spa do
  puts "\n## Zipping apps"
  status = system('pushd Apps; for i in *; do zip -r ../build/Apps/$i.zip $i; done; popd')
  puts status ? "Success" : "Failed"
  puts "\n## Moving .zip files to .spa files"
  status = system('for file in build/Apps/*.zip; do mv "${file}" "${file/%.zip/.spa}"; done')
  puts status ? "Success" : "Failed"
end

desc "Compile Sass to build/glue1.css"
task :compile do
  puts "\n## Compiling Sass"
  status = system('sass skin/glue1.scss:build/glue1.css')
  puts status ? "Success" : "Failed"
  puts "\n## Filtering glue1.css into Apps"
  Rake::Task["filterdown"].invoke
  puts "\n## Deleting Sass source map"
  status = system('rm -f build/*.map')
  puts status ? "Success" : "Failed"
  Rake::Task["spa"].invoke
  puts "\n## Done!"
end

# desc "Notify various services about new content"
#   task :ping => [:pingomatic, :sitemapgoogle, :sitemapbing] do
# end
