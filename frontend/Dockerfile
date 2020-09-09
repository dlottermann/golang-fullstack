FROM node:12

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN rm -rf node_modules && npm cache clean --force

RUN npm install --silent

EXPOSE 3003

CMD ["npm", "start"]