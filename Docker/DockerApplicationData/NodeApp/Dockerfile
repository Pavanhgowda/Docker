FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ARG DEFAULT=8000

ENV PORT $DEFAULT

EXPOSE $PORT 

#VOLUME [ "/app/feedback" ]  <== ananmous volume

CMD ["node", "server.js"]