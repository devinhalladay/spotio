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
  # puts "\n## Compiling Apps/* dirs to build/*.spa"
  # status = system('for i in Apps/*; do zip -r "build/${i%}.zip" $i/*; done')
  # puts status ? "Success" : "Failed"
  # `find Apps -type d -maxdepth 1 -print0 | xargs -0 -I {} zip -r build/*.zip {}`
  # pushd
  # app_dirs = system('find Apps -type d -maxdepth 1 -print')
  system('find Apps -type d -maxdepth 1 -print').each do
    puts dir
  end
  #  -exec zip -r build/'{}'.zip . -i 'cd {}' \;
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
