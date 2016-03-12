'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http) {
  $scope.contacts = [];


  $http({
    method: 'GET',
    url: '/contacts',
  })
  .then(function (resp) {
  $scope.contacts = resp.data;
    console.log(res);
  }, function (err) {
    console.error('ERR', err);
  });

  $scope.addContact = function() {
    //console.log(this)
    $scope.contacts.push(this.contact);
    $http({
      method: 'POST',
      url: '/contacts',
      data: { name: $scope.contact.name, phone: $scope.contact.phone, email: $scope.contact.email }
    });

};



// .then
});
      // $scope.name = '';

    // var numbers = $scope.number.split(',');//number input
    // numbers.forEach(function(number) {
    //   if (!$scope.numbers) $scope.numbers = [];
    //   $scope.numbers.push(number);
    // });
    //   $scope.phone = '';
    //
    // var emails = $scope.email.split(',');//emails input
    // emails.forEach(function(email) {
    //   if (!$scope.emails) $scope.emails = [];
    //   $scope.emails.push(email);
    // });
    //   $scope.email = '';
    //
    //
    //   $scope.addTask = function() {
    //   // $scope.newContacts.complete = false;
    //   var userName = angular.copy($scope.newContacts);
    //   $scope.contacts.push(userName)
    //   $scope.newUserName = {};
    // };
    //   $scope.deleteUserName = function(userName) {
    //     var index = $scope.todos.indexOf(userName);
    //     $scope.contacts.splice(index, 1);
    //   };
    //
    //

// });
