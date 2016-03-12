'use strict';

var app = angular.module('routingApp');

app.service('SwapiService', function($http) {

//this.people = []

  this.getCharacter = function(url) {
    $http.get(url)
    .then(res => {
      this.char = res.data;

    }, err => {
      console.error('SwapiService error:', err);
    })
  };


  this.getPeople = function(num) {
     $http.get('http://swapi.co/api/people/?page=' + num)
     .then(res => {
//      SwapiService.people
       this.people = res.data.results;

     }, err => {
       console.error('SwapiService error:', err);
     })
  };


});

// in some controller
// SwapiService.people;
// $scope.people = SwapiService.people;
