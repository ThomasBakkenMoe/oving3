const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var codeResult = []; // Should probably change this guy to something that is not TEMP

app.get('/', (request, response) =>{

    switch (request.body.lang) {

        case "python":
            console.log("Selected language: Python");
            executePythonCode("print('Hello World')");
            response.send(codeResult);
            break;

        default:
            console.log("Error selecting language");
    }
    console.log("Got a get request!");
});

app.listen(3003, () =>{
    console.log("API Running!")
});

function executePythonCode(code) {
    console.log("Executing python code");
    console.log(code);
    codeResult = [];

    //TODO: write to file instead of attempting to execute directly

    fs.writeFile('pythonCode.py', code);
    exec('python pythonCode.py').stdout.on('data', (data) =>{
        console.log(data);

        if(data !== undefined){
            codeResult.push(data);
        }
    });

}