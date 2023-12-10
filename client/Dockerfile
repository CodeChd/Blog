FROM node:20.9.0-alpine3.18 as build-stage_prod
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build


FROM nginx:mainline-alpine3.18-slim
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage_prod /frontend/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
