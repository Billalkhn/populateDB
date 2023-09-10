# Use an official Node.js runtime as a parent image with version 16.6.2

FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/project

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your application
CMD [ "node", "dist/index.js"]
