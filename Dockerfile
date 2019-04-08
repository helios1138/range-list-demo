FROM node:11.13.0-alpine

WORKDIR /app

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn

COPY . /app/

CMD yarn test
