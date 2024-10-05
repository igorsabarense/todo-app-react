FROM node:20-alpine

WORKDIR /app/frontend

COPY package* .
RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]