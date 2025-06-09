FROM ruby:3.3

LABEL maintainer="tantrungse@gmail.com"

# Install Node.js and npm for TailwindCSS
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update -yqq && apt-get install -yqq --no-install-recommends \
       nodejs

COPY Gemfile* /usr/src/app/
WORKDIR /usr/src/app
RUN bundle install

COPY . /usr/src/app/

# Precompile assets for TailwindCSS
RUN bundle exec rails assets:precompile

CMD ["bin/rails", "s", "-b", "0.0.0.0"]