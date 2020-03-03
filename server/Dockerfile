WORKDIR /server
COPY package.json /server
RUN npm install
RUN apt-get update || : && apt-get install python -y
COPY . /server
CMD ["npm","start"]