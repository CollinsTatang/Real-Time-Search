namespace :start do
  desc 'Run migrations and start the Rails server'
  task all: %i[db_migrate server]

  task :db_migrate do
    puts 'Running migrations...'
    system('bundle exec rake db:migrate')
  end

  task :server do
    puts 'Starting Rails server...'
    exec('bundle exec rails server -p $PORT')
  end
end
