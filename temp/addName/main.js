'use strict';
const PORT = 8280;
const timeStamp = ('./timeStamp.json');
var fs = require('fs')
var http = require('http');
var moment = require('moment');
// var server = http.createServer(function(req, res) {
  var time = [];
  var stamp = moment().format();
  time.push(stamp);
console.log("time:", time);

fs.writeFile('timeStamp.json', time ,(err) => {
  if (err) console.log('err:', err);
  console.log('saved');
});
	// res.write('\n')
	// res.end()
// });
// server.listen(8280);
