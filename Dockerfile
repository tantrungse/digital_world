FROM ruby:3.3

LABEL maintainer="tantrungse@gmail.com"

RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends

COPY Gemfile* /usr/src/app/
WORKDIR /usr/src/app
RUN bundle install

COPY . /usr/src/app/

CMD ["bin/rails", "s", "-b", "0.0.0.0"]