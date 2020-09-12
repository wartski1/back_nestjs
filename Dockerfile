FROM node:14.8.0-alpine3.12

RUN mkdir /code
COPY . /code

WORKDIR /code

RUN npm i

CMD npm start