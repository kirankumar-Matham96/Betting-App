# Uses Node.js image to build frontend
FROM node:18-alpine AS build

# Setting up working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the React app
RUN npm run build

# Serve the app using Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposing the port
EXPOSE 80

# Running the app
CMD ["nginx", "-g", "daemon off;"]
