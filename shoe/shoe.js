'use strict';

var fs = require('fs');
var path = require('path');

var shoesFilepath = path.join(__dirname, '../data/shoes.json');
var Shoe = {};

Shoe.get = function(cb) {
  fs.readFile(shoesFilepath, function(err, data) {
    if(err) return cb(err);
    var shoes = JSON.parse(data);
    cb(null, shoes);
  });
};

Shoe.create = function(newShoe, cb) {
  this.get((err, shoes) => {
    if(err) return cb(err);
    newShoe.id = uuid();
    shoes.push(newShoe);
  });
};

exports.write = function(shoes, cb) {
  fs.writeFile(shoesFilepath, JSON.stringify(shoes), cb)
};


exports.getById = functio() {
  this.get((err, shoes) => {
    var length = shoes.length

    shoes = shoes.filter(function(shoe) {
      return shoe.id !== id;
    });
    if(length === shoes.length) {
      cb({err: "Shoe not found. "});
      return;
    }
    this.write(shoes, cb);
  });
};
    //


    exports.update = function (id, updatesObj, cb) {
//find the shoe with the given id update that shoe with the obj
//save the modified shoes array to db // cb with updated shoe

      this.get((err, shoes) => {
        shoes = shoes.map(function(shoe) {
            if(shoe.id === id) {
              for(var key in updatesObj) {
                shoe[key] = updatesObj[key];
              }
              updatedShoe = shoe;
            }  //do the update
          }
            return shoe;
        });
        if(!updatedShoe) {
          cb({err: 'shoe not found.'});
          return;
        }
        this.write(shoes, function(err) {
          cb(err, updatedShoe)
        });                                      // cb(err, updatedShoe)
      });
    };
              // fs.writeFile(shoesFilepath, JSON.stringify(shoes), function(err) {
              //   cb(err);
              // }); //this.write(shoes, cb); //stringify and write
  });
};

module.exports = Shoe;
