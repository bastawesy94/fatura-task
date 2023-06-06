# # Use the official Node.js image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
# RUN npm install

# Copy the application source code to the container
COPY . .

# Set the environment variables for PostgreSQL
ENV POSTGRES_USER slickuser
ENV POSTGRES_PASSWORD slickpass
ENV POSTGRES_DB fatura
ENV POSTGRES_HOST db
ENV POSTGRES_DIALICT postgres
ENV DATABASE_URL postgresql://slickuser:slickpass@db:5432/fatura?schema=public
ENV BUILD_TIMESTAMP=$BUILD_TIMESTAMP

# Expose the port that the application listens on
EXPOSE 8000

# Start the application

CMD ["node", "./dist/src/index.js"]