#!/usr/bin/env bash
set -e

until PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U postgres -c '\l'; do
  sleep 1
done

cd /app
bundle exec rake db:create RAILS_ENV=$RAILS_ENV
bundle exec rake db:migrate RAILS_ENV=$RAILS_ENV

bundle exec puma -d
exec tail -f log/${RAILS_ENV}.log
