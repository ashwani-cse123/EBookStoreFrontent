# Use Alpine Linux as the base image
FROM node:18.18.0-alpine AS ebookfrontend
 
# Install necessary dependencies
RUN apk update && \
    apk add --no-cache nodejs npm
 
# Install Angular CLI globally
RUN npm install -g @angular/cli@19.0.6
 
# Set the working directory in the container
WORKDIR /app
 
# Copy package.json and package-lock.json (if available)
COPY package*.json ./
 
# Install project dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the Angular application for development env.
RUN ng build

 
# Stage 2: Use Nginx for serving the Angular application
FROM nginx:latest
RUN chmod -R 755 /usr/share/nginx/html

#Copy the build output to replace the default nginx contents
COPY default.conf /etc/nginx/conf.d
# Copy the built Angular app to the default Nginx public folder
COPY --from=ebookfrontend /app/dist/your-book/ /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
