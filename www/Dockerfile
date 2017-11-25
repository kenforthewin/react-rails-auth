FROM node:6
USER root
RUN npm install -g yarn
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]