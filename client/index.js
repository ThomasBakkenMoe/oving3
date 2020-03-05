import React, {useState} from 'react';
import axios from 'axios';
import {Button, Form, Container, Card, Col, Row} from 'react-bootstrap'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {python} from "react-syntax-highlighter/dist/cjs/languages/prism";

function app() {

    let ip = "http://10.239.159.185:3003/";

    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    function runCode(lang) {
        axios.post(ip, {lang: lang, code: code}).then((response) => {
                console.log(response);
                setCode(response.data.codeResult[0]);
        });
    }

    return(
        <Container>
            <Row>
                <Form.Control onChange={event => setCode(event.target.value)} as="textarea" rows="5"/>
            </Row>
            <Row>
                <SyntaxHighlighter language={python} style={dracula}>{code}</SyntaxHighlighter>
            </Row>
            <Row>
                <Button onClick={() => runCode("python")}>Run code!</Button>
            </Row>
            <Row>
                <SyntaxHighlighter language={python} style={dracula}>{result}</SyntaxHighlighter>
            </Row>
        </Container>
    );
}

export default app;