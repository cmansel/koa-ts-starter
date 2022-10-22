FROM node:16

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

ENTRYPOINT ["npm", "start"]
EXPOSE 8082