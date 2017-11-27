FROM ruby:2.4
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client
WORKDIR /app
ENV BUNDLE_PATH /deps/bundle
COPY Gemfile* /app/
RUN bundle
COPY ./ /app
EXPOSE 3000
CMD ["./deploy/start_server.sh"]
