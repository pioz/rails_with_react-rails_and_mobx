Rails.application.configure do
  config.browserify_rails.commandline_options = '-t [ babelify --presets [env stage-0 react] --plugins [transform-decorators-legacy] ]'
  config.browserify_rails.force = ->(file) { file.start_with?(Rails.root.join('app/assets/javascripts').to_s) }
end
