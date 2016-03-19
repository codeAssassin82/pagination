'use strict'

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $http, $state, TravelService) {

  TravelService.load() /// if you put this in a function and call this function right away when\
  .then(function(res) {//loading
    console.log(res.data);
    $scope.lists = res.data;
  }, function(err) {
    console.log('err:', err);
  })

$scope.delete = function(travel) {
  console.log(travel)
  TravelService.delete(travel)
  .then(function(res) {
    
      $scope.lists = res.data;
      }, function(err) {
        console.log('err:', err);
      })
  }


$scope.edit = function(travel) {
  console.log('edit');
  $scope.editTravel = angular.copy(travel);
}

$scope.confirm = function() {
  TravelService.edit($scope.editTravel)
  .then(function(res) {
    console.log("edited");
    $scope.lists = res.data;
  }, function(err) {
    console.log(err);
  })
}

$scope.cancelEdit = function(travel) {
  console.log('cancelEdit');
}


    $scope.post = function() {
      $http.post('/travel', $scope.newData)
        .then(function(res) {
          $scope.newData = {};
            $http.get('/travel')
              .then(function(res){
                $scope.lists = res.data;
              }, function(err){
                console.log("err:", err);
              });
        }, function(err) {
          console.log(err);
        });
      }

  })

app.controller('destinationCtrl', function($scope, $http, $state) {
  $http.get('/travel')
  .then(function(res) {
    $scope.destination = res.data;
console.log('got 2', res.data);
    }, function(err) {
      console.log('err:', err);
    })
      $scope.go = function(data) {
        $state.go("locations", {
          id: data.id
        })
      }
  })

app.controller('locationCtrl', function($scope, $http, $stateParams) {
  $http.get(`/travel/${$stateParams.id}`)
  .then(function(res) {
      console.log("get request to /travel/"+$stateParams.id, "returned",  res.data[0]);
      $scope.data = res.data[0]; //{{variable.location}}
    }, function(err) {
      console.log('err:', err);
    })

    $scope.info = function() {
      $scope.info = $scope.data.info
    }

  })
