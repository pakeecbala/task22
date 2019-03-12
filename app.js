const express = require('express');
var app = express();

app.use(express.static(__dirname));

var path = require('path');

const data = require('./pets.json');

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
   });

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
   });
app.listen(process.env.PORT || 8080)

app.get('/data', (req, res) =>{
    res.json(data);
    });