Rails.application.configure do
  # To render React components in production, precompile the server rendering manifest:
  config.assets.precompile += ['server_rendering.js']

  config.react.variant = Rails.env.production? || Rails.env.staging? ? :production : :development
  config.react.addons = true
  config.react.server_renderer_options = {
    replay_console: false
  }
end