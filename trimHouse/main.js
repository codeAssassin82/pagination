'use strict';

var package = angular.module('myApp', []);

package.controller('mainCtrl', function($scope, $http) {
  $scope.package = [];
  $scope.balance = 0;


  $http({
    method: 'GET',
    url: '/package',
  })
  .then(function (resp) {
  var obj = resp.data;
  $scope.package = $scope.package.concat(obj)
  console.log('data', obj);
  obj.forEach(function(item ) {
    console.log(item);
    if(item.credit){
      console.log('credit', item.credit);
      $scope.balance += item.credit}
    if(item.debit){
      console.log('debit', item.debit);

      $scope.balance -= item.debit}

  })
  console.log($scope.balance);
  }, function (err) {

    console.error('ERR', err);
    console.log('lets go');
  });

  $scope.addBank = function() {

    // console.log('jhgy',bank)
    // $scope.package.unshift(bank);

    $http({
      method: 'POST',
      url: '/package',
      data: { desc: $scope.desc, credit: $scope.credit, debit: $scope.debit }
    })
    .then(function (resp) {
      console.log('data', resp.data);

    // $scope.package = resp.data;
    }, function (err) {
      console.error('ERR', err);
      // console.log('here');
    });
  };
});
