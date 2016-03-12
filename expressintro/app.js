

'use strict';
console.log('__dirname:',__dirname);
const PORT = 8000;
// const todosFilename= './todos.json'
var express = require('express'); //require the module you download
var http = require('http');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express(); //use express
console.log('working');
var todosFilename = './todos.json';

app.use(express.static('public'));
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', function(req, res, next) { // This is how you start an express app
  console.log('req time',req.time);
  res.sendFile(path.join(__dirname, 'index.html')); //You can send raw html to the browser with a file or plain ol html, __dirname is just the absolute path
});

// respoond with all tohe todos in database
//1. read json file//2. parse data into the array
//3 send the data
//4
app.get('/todos', function(req, res){
  console.log('/todos');
  fs.readFile(todosFilename, function(err, data){
    var todos = JSON.parse(data);
    res.send(todos);

  });

});
//
// app.get('/time', function(req, res) {
//   var timestamp = Date.now();
//   res.send(timestamp.toString());
// });


app.post('/', function(req, res) {
  console.log('post');
  //fs.readFile('./')
console.log('req.body', req.body);
  res.send('posted'); // have to call res.send or else it will just stall there!
fs.readFile('.todos.json', function(err, data) {
  var req = req.body.newName;
})


});


app.post('/todos', function(req, res, next) {
  var name = req.body.newName;
  fs.readFile('./todos.json', function(err,data) {
    var namesArray = JSON.parse(data);
    namesArray.push(todo);
    fs.writeFile('./todos.json', JSON.stringify(todosArray), function(err) {
      console.log('done');
      res.send('good');
    });
  });

  res.send(req.body.newName);
});

var server = http.createServer(app);// creating server
server.listen(PORT, function() {
  console.log('Server is listening cuz');
});
