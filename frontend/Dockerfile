FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend assets
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

# Copy the built frontend assets from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy custom Nginx configuration, if you have one
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the frontend server
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
