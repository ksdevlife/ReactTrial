"use strict"

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const LISTEN_PORT = 3000;
app.listen(LISTEN_PORT, function() {
    console.log('server is listening ' + LISTEN_PORT);
})