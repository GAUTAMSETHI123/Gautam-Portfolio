#Stage 1
FROM node:16.13.0 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --force
COPY . .
RUN npm run build
CMD [ "npm", "start" ]

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

