# Create image from nodejs base image
FROM node:6

# Clone the repo from github
RUN git clone https://github.com/codegenuis/carbonivs

# Change workind directory to the cloned repo
WORKDIR /licenseImage

# Copy the file from your host to your current location.
COPY package.json .

# Install all the dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .