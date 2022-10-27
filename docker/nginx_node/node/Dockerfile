FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN apt-get update -y\
    && apt-get install -y wget \
    && npm install express \
    && npm install mysql

EXPOSE 3000

CMD ["node","index.js"]