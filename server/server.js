const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var codeResult = "Response!";

app.get('/', (request, response) =>{

    console.log("Got a get request!");
    response.send(codeResult);
});

app.listen(3003, () =>{
    console.log("API Running!")
});