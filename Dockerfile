FROM node:18.14.0

WORKDIR /app   
COPY . .
RUN yarn install

WORKDIR /app/back
RUN yarn install

WORKDIR /app/front
RUN yarn install

EXPOSE 5173

WORKDIR /app
CMD ["yarn", "dev"]
