// 'use strict';
//
// exports.sum = function(arr) {
//     retur arr.reduce((sum, num) => sum + num, 0);
// };
//
// export.five = function() {
//   return 5;
// };
//
// export.avg = function() {
//   return this.sum(arr) / arr.length;
// };
//
// module.exports = math;
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
