# Stage 1: Build the Vite React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency specifications
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build production distribution
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Copy built dist files to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
