FROM node:18-alpine AS build
ARG BUILD_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=$BUILD_ENV

FROM nginx:alpine
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g", "daemon off;" ]