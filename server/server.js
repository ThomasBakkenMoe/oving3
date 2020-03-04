const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var codeResult = "Response!"; // Should probably change this guy to something that is not TEMP

app.get('/', (request, response) =>{

    switch (request.body.lang) {

        case "python":
            console.log("Selected language: Python");
            executePythonCode(() => {
                response.send(codeResult);
            });
            break;

        default:
            console.log("Error selecting language");
    }
    console.log("Got a get request!");
});

app.listen(3003, () =>{
    console.log("API Running!")
});

function executePythonCode(callback) {
    callback();
}