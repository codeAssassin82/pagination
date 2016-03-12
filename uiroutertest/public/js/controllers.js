'use strict';

var app = angular.module('routingApp');

var page = 1;

app.controller('aboutCtrl', function($scope, $state, SwapiService) {
  console.log('aboutCtrl!');
  var url = $state.params.url;
  console.log(url);
  $scope.$watch(function() { //watch function
    //return the thing to watch
    return SwapiService.char; //.char
  }, function(newVal, oldVal) {//listerner function
    // triggered when the watched thign changes

    $scope.person = newVal;//person

  $scope.Person = function(param) {
    console.log("param:", param);
    $state.go('swPerson', {
      personId: param
    });
  };
});
});
app.controller('peopleCtrl', function($scope, SwapiService) {
  // $scope.people = SwapiService.people;
  //watch this thing SwapiService.peop;
$scope.getPeople = function(person){
  console.log(person);
};
  $scope.$watch(function() { //watch function
    //return the thing to watch
    return SwapiService.people; //.char
  }, function(newVal, oldVal) {//listerner function
    // triggered when the watched thign changes

    $scope.people = newVal;//person

$scope.page = function(pg) {
  page = pg;
  $scope.people = SwapiService.getPeople(page);
};


    console.log('newVal', newVal);
    console.log('oldVal', oldVal);

  });




  $scope.goHome = function() {
    console.log('state:', $state);
    $state.go('home');

  };


});
