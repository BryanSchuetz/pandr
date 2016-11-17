guard 'sass', :input => 'styles/sass', :output => 'styles/css', :style => :compressed

guard :concat, type: "js", files: %w(jquery-1.11.2.min bootstrap jquery.main respond flickity primary packery), input_dir: "js/includes", output: "js/site"

guard 'livereload' do
  watch(%r{.+\.(html|liquid)$})
  watch(%r{styles/sass/.+\.scss})
  watch(%r{js/includes/.+\.js})
end
