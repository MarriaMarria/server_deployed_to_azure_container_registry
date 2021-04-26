# pull node image
FROM node:15

# builds TS code to run in production
ENV NODE_PATH=./build

WORKDIR /app

COPY package*.json ./

RUN npm i
EXPOSE 3000
CMD ["npm", "start"]

COPY . .