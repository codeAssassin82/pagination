'use strict';

const PORT = 8000;

var http = require('http');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var messages = require('./message');
var bodyParser = require('body-parser');
var path = require('path')
//express app instalation
let app = express();


//general pupose middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); ///it can be true or false false is just more strict

app.use(express.static('public'));
//routes
app.get('/', function(req, res) {

  res.send('okkk!!!');
})
//reading from file messages and the fs.readFile needs full path starting with data file
app.get('/messages', function(req, res) {
  messages.read(function(err, messages){
    if(err){
      return res.status(400).send(err);
    }
    res.send(messages);
  });
});
//pseudocode
// req.body  will be          req.body should look like the object itself
// {
//   body: 'hey',
//   author: 'John'
//   time: 'eventually'
// }




app.post('/messages', function(req, res, next) {

  // console.log('req.body:', req.body);
  // res.send(req.body);
  messages.read(function(err, messages ) {

    var newMessage = req.body;
    messages.push(newMessage);
    messages.write(messages, function(err) {
      if(err){
        return res.status(400).send(err);
      }
      res.send();
    });
  });
});

// exports.write

app.get('/'), (req, res ) => {
  res.sendFile(path.john(__dirname, 'index.html') );
};
//server initialization
let server = http.createServer(app);
server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
