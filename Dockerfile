# Set the base image to Ubuntu
FROM node:latest

# Set working directory and add project files
WORKDIR /app
ADD ./ /app

# Expose port 3000
EXPOSE 3000

# Set enviroments
ENV MONGO_URL 'mongodb://159.89.108.85:27017/predix'
ENV PORT 3000

# Install NPM dependecies with Yarn
#RUN npm install
RUN npm run prestart:prod
RUN npm install -g nodemon
CMD ['npm', 'run', 'start:prod']
