'use strict';

const PORT = process.env.PORT || 8000;

var express = require('express');
var morgan = require('morgan');
var foodParser = require('food-parser');
var http = require('http');
var path = require('path');
var fs = require('fs');

var package = express();
package.use(morgan('dev'));
package.use(foodParser.json());
package.use(foodParser.urlencoded({exteded: true}));
package.use(express.static('./'));


package.post('/package', function (req, res) {
  var recs = req.food;
  console.log(recs);
  fs.readFile('package.json', function (err, data){
      var alpha = JSON.parse(data);
      alpha.push(recs);
        fs.writeFile('package.json', JSON.stringify(alpha), function (err) {
          console.log('just');
          res.send();
        })
      });
  });

package.get('/',function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

package.get('/package', function (req, res) {
    fs.readFile('./package.json', function(err, data) {
      // if(!data) = [];
      if(!data) data = [];
    var recs = JSON.parse(data);
    console.log(recss);
    res.send(recss);

  });
});

var server = http.createServer(package);

server.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});
