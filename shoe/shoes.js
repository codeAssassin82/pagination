'use strict';

var fs = require('fs');
var path = require('path');

var Shoe = require('../models/shoe');

router.get('/', function(req, res) {
  Shoe.get(function(err, shoes) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(shoes);
  });
});

//GET shoes / id

router.get('/:id', function(req, res) {
  var id = req.params.id;

  Shoe.get( function(err, shoes) {
    if(err) {
      res.status(400).send(err);
    }else{
      res.send();
    };
  // shoes - array of shoe objects
  // id - id we're looking for

var shoe = shoes.find(function(obj) {
  return obj.id === id;
});
    if(!shoe) {
      res.status(404).send({err: "Shoe not found"});
      return;
    }                                                    //Shoe - shoe models
            res.send(shoe);                                            //shoe - single shoe object
  });
});

router.post('/', function(req, res) {
  var newShoe = req.body;

  Shoe.create(newShoe, function(err) {
    if(err) {
      res.status(400).send(err);
    }else{
      res.send();
    }
  });
});



router.delete('/:id', function(req, res) {

  Shoe.delete(id, function(err) {
    if(err) {
      res.status(400).send(err);
    }else {
      res.send();
    }
  });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var updatesObj = req.body;
  {
    "brand": "puma"
  }

  shoe.update(id, updatesObj, function(err, updatedShoe) {

  });
});



module.exports = router;
