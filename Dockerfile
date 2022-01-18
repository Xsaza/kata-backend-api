FROM node:14.17.6-alpine

WORKDIR /app

COPY package.json ./package.json
RUN npm i --progress

COPY src ./src
COPY tsconfig.json ./tsconfig.json

CMD npm run serve