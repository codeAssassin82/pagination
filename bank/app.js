'use strict';

const PORT = 8000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));







var server = http.createServer(app);

server.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});
