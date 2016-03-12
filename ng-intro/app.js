'use strict';

const PORT = 3333;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-Parser');
var http = require('http');
var path = require('path');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));
app.use(express.static('public'));


app.get('/',function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

var server = http.creatServer(app);

server.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});
