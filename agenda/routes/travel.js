'use strict'

var express = require('express');
var router = express.Router();

var db = require('../config/db');


router.get('/', function(req, res, next) {

  db.query('select * from traveling', function(err, travel) {
    if(err) {
      res.status(400).send('this error');
      return;
    }
  res.send(travel);
  });
});

router.get("/:id", function(req, res, next) {
  db.query('select * from traveling where id = ?', req.params.id, function(err, travel) {
    res.send(travel);
  })
});

// Car.getAll(function(err, cars) {

// })


router.post('/', function(req, res) {

  db.query('insert into traveling set ?', req.body, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
  res.send(result);
  });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var updatedObj = req.body;
  db.query('update traveling set ? where id = ?', [req.body, id], function(err, result) {
    if(err) {
    res.status(400).send(err);
  }
  db.query('select * from traveling', function(err, travel) {
    if(err) {
      res.status(400).send('this error');
      return;
    }
  res.send(travel);
  });
});
})

router.delete('/:id', function(req, res) {
  console.log('back end');
  // var id = req.params.id;
  db.query('delete from traveling where id = ?', [req.params.id], function(err, results) {
    if(err){
      res.status(400).send(err);
      return;
    }
    db.query('select * from traveling', function(err, travel) {
      if(err) {
        res.status(400).send('this error');
        return;
      }
    res.send(travel);
    });
  })

})

module.exports = router;
