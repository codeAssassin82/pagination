'use strict';

const PORT = 8000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-Parser');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));
app.use(express.static('./'));


app.post('/contacts', function () {
  var contact = req.body;
  fs.readFile('contacts.json', function (err, data){
      var alpha = JSON.parse(data);
      alpha.push(contact);
        fs.writeFile('contacts.json', JSON.stringify(alpha), function (err, data) {
          res.send();
        })
      });
  });

app.get('/',function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/contacts', function (req, res) {
    fs.readFile('./contacts.json', function(err, data) {
      // if(!data) = [];
      if(!data) data = [];
    var contacts = JSON.parse(data);
    console.log(contacts);
    res.send(contacts);

  });
});

var server = http.createServer(app);

server.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});
