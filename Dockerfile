FROM ruby:3.3

RUN apt-get update -yqq
RUN apt-get install -yqq --no-install-recommends

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN bundle install
