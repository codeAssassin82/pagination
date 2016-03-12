'use strict';
const   FILENAME ='./timestamps.json';
const PORT =  8082;

var fs = require('fs');
var moment = require('moment');
var newTimestamp = moment().format('h:mm:ss');
var http = require('http');



var server = http.createServer(function(req, res){

});
server.listen(PORT, function() {
  console.log(`Server listing on port ${PORT}`);
});








//
// fs.readFile(FILENAME, function(err, data){
//
//   var timestamps = JSON.parse(data);
//
//   timestamps.push(newTimestamp)
//
//   fs.writeFile(FILENAME, JSON.stringify(timestamps), function(err){
//
//     console.log('done!');
//   });
//
// });





//
// fs.readFile('./time:', (err, timestamp) => {
//   var usableTime = JSON.parse(timestamp);
//   console.log(JSON.stringify(usableTime));
// });
// fs.writeFile()
//   // fs.writeFile('./timeStamps.json',timestamp, function(err){
  //   console.log('err:', err);
  //
  // //
  // fs.writeFile('./timeStamps.json',timestamp, function(err){
  //   console.log('err:', err);



//
// fs.readFile('./data.json', (err, data) => {
// var usableData = JSON.parse(data);
//
// usableData.forEach(function(obj){
//   console.log(obj.company);
// });
//
//   // // console.log('err:', err);
//   // // console.log('data:', data.toString());
//   // // console.log('data', data);
//   //
//   // console.log('JSON.parse(data):', JSON.parse(data))
// });
//
// // var data = fs.readFileSync('./another.txt')
