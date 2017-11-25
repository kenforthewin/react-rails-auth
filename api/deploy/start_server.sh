#!/usr/bin/env bash
set -e

until PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U postgres -c '\l'; do
  sleep 1
done

cd /app
bundle exec rake db:create RAILS_ENV=$RAILS_ENV
bundle exec rake db:migrate RAILS_ENV=$RAILS_ENV

if [ "$RAILS_ENV" = "development" ]; then
  bundle exec rails s -b 0.0.0.0 -p 3001 -d
  exec tail -f log/development.log
fi