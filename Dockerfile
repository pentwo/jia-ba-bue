# Use the official Node.js image as a base
FROM node:16-alpine

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm ci --unsafe-perm --no-audit --no-fund

# Copy the rest of the project files
COPY . .

# Build the Next.js application
# RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]
