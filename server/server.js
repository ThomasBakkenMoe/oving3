const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const fs = require('fs');
const app = express();
let cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let codeResult = []; // Should probably change this guy to something that is not TEMP

app.post('/', (request, response) =>{

    let code = request.body.code;

    switch (request.body.lang) {

        case "python":
            console.log("Selected language: Python");
            executePythonCode(code, () => {
                response.setHeader('Content-Type', 'application/json');
                response.send(JSON.stringify({codeResult: codeResult}));
            });
            break;

        default:
            console.log("Error selecting language");
            break;
    }
    console.log("Got a get request!");
});

app.listen(3003, () =>{
    console.log("API Running!")
});

function executePythonCode(code, callback) {
    console.log("Executing python code");
    console.log(code);
    codeResult = [];

    //TODO: write to file instead of attempting to execute directly

    fs.writeFile('pythonCode.py', code, function(err, data){
        if(err) console.log('error', err);
    });
    exec('python pythonCode.py').stdout.on('data', (data) =>{
        console.log(data);

        if(data !== undefined){
            codeResult.push(data);
        }

        callback();
    });
}