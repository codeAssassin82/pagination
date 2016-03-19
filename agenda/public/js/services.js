'use strict'

var app = angular.module('myApp');

app.service('TravelService', function($http) {

  this.load = function() {
    return $http.get('/travel')
  }
  this.create = function(newData) {
      return $http.post('/travel', newData)
  }

  this.edit = function(travel) {
    return $http.put(`/travel/${travel.id}`, travel);
  }

  this.delete = function(travel) {
    console.log(travel);
    return $http.delete(`/travel/${travel.id}`);
  }
});
