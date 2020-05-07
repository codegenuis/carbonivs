# Create image from nodejs base image
FROM node:6

# Clone the repo from github
RUN git clone https://git.heroku.com/swiftendng.git

# Change workind directory to the cloned repo
WORKDIR /licenseImage

# Install all the dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]