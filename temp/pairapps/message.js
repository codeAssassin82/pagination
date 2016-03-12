'use strict';


let messagesFilename = './data/messages.json';
let fs = require('fs');


// app.get('/messages', function(req, res){
//   messages.read(function(err, messages){
//
//   });
// });

exports.read = function(callback) {
  fs.readFile(messagesFilename, function(err, data) {
    var messages = JSON.parse(data);
    callback(err, messages);

  });
};

exports.write = function(messages, callback) {
//do some writing
var messagesJSON = JSON.stringify(messages);
fs.writeFile(messagesFilename,MessagesJSON, function(err){
  callback(err)
  });
};
