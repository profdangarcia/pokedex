FROM node:18.13.0-slim

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
