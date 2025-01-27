# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "run", "dev"]