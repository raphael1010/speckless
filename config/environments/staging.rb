Speckless::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Log error messages when you accidentally call methods on nil.
  config.whiny_nils = true

  # Show full error reports and disable caching
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Don't care if the mailer can't send
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin
config.assets.compile = true

  # Needed for the ActiveAdmin's manifest assets.
 config.assets.precompile += [ '*.js', 'compiled/*','libs/*','vendor/*' ,'icons/*','samples/*' ,'slider/*' ,'social/*.png','tabs/*' ,'testimonials/*' ]


  # Raise exception on mass assignment protection for Active Record models
  config.active_record.mass_assignment_sanitizer = :strict

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  config.active_record.auto_explain_threshold_in_seconds = nil


# Enable threaded mode
 config.threadsafe! unless $rails_rake_task

  # Do not compress assets
  config.assets.compress = false

  # Expands the lines which load the assets
  config.assets.debug = true




  config.action_mailer.default_url_options = { :host => "isw-tq-ralpho:2000" } 
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :address => "172.25.20.8",
    :port => 8990,

  #  :address              => "smtp.gmail.com",
  #  :port                 => 587,
  #  :domain               => "gmail.com",
  #  :user_name            => "ask4ralph@gmail.com",
  #  :password             => "ole",
  #  :authentication       => "plain",

    :enable_starttls_auto => false,
  }


end
