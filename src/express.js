// const PIXI =  require("pixi.js");

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// For html files
app.use(express.static(path.join(__dirname, 'views')));
// For js and css
app.use(express.static(path.join(__dirname, 'scripts')));

app.get('/', (request, response) => {
    response.send('Hello!');
})

app.get('/echo/:urlString', (request, response) => {
    response.send(request.params['urlString']);
})

app.get('/pixi', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'pixi.html'));
})

app.get('/secret', (request, response) => {
    response.send('Secret page');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('whoops', err);
    }
    console.log(`server is listening on ${port}`);
})