# Dev build, install all dependencies so that app build files can be compiled from typescript
FROM node:16
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY .eslintrc.js ./
COPY .prettierrc ./
COPY src ./src

RUN npm run lint
RUN npm run format-ci
RUN npm run build

# Prod build, install only dependencies required for production
FROM node:16
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=0 /home/node/app/build ./build
EXPOSE 8080
CMD ["npm", "start"]