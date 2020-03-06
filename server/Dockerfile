FROM ubuntu:latest
USER root
WORKDIR /server
COPY ./package.json /server/package.json
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs
RUN npm install
COPY ./ /server
CMD ["npm","start"]
