guard 'sass', :input => 'styles/sass', :output => 'styles/css', :style => :compressed

guard :concat, type: "js", files: %w(ss-standard primary ss-social), input_dir: "js/includes", output: "js/site"

guard 'livereload' do
  watch(%r{.+\.(html|liquid)$})
  watch(%r{styles/sass/.+\.scss})
  watch(%r{js/includes/.+\.js})
end
