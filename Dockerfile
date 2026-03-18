# Use LTS Node.js image based on Debian Buster
FROM node:lts-buster

# Switch to root to install system dependencies
USER root

# Update, install dependencies, upgrade packages, and clean up cache
RUN apt-get update && \
    apt-get install -y --no-install-recommends ffmpeg webp git && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Switch to non-root user for security
USER node
WORKDIR /home/node

# Clone the DJ repository
RUN git clone https://github.com/JawadTechX/DJ DJ

# Set working directory to the project
WORKDIR /home/node/DJ

# Set permissions safely
RUN chmod -R 755 /home/node/DJ

# Install dependencies with yarn, limiting concurrency for stability
RUN yarn install --network-concurrency 1

# Expose port for the application
EXPOSE 7860

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
