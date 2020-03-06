# oving3
Browser-based python "compiler"

## Client setup
From root directory

```
cd client
Change variable "ip" in file client/src/app.js to the appropiate value (for example localhost:3003)
npm install
npm start
```

## Server setup WITHOUT docker

From root directory:
```
cd server
npm install
npm start
```

## Server setup WITH docker

From root directory:
```
cd server
docker image build -t server .
docker container run --publish 3003:3003 --name server server
```
