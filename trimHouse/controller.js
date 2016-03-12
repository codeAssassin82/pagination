'use strict';

// no array, referencing a pre-existing module
var app = angular.modulBetaApp);

app.controlleBetaCtrl, function($scope, alphaService) {
  console.log('woo! betaCtrl!!!');
//
// ShoeService.sayHi();
// console.log(ShoeService.numbers);

  alphaService.fetch()
  .then(function(res) {
    console.log('res:', res);
    var alpha = res.data;
    $scope.alpha = alpha;
  }, function(err){
    console.error('err:', err);

  });
$scope.addBeta = function() {
  // console.log($scope.newShoe);
  ShoeService.create($scope.newBeta)
  .then(function(res) {
    console.log('res.data:', res.data);
    $scope.alpha.push(res.data)

    //succes callback
    //update the $scope


    console.log('res:', res);
  },function(err){
    console.error('err', err);
  });
  };
  $scope.removeBeta = function(Beta) {
    console.log('Beta:', Beta);
    alphaService.remove(Beta)
    .then(function() {
      var index = $scope.alpha.indexOf(Beta);
      $scope.alpha.splice(index, 1);
      //success!
      // $scoBetas               ///modify
    }, function(err) {
      console.error('err:', err);
    })
  };
$scope.editBeta = function(Beta) {

//editing input
  $scope.BetaToEdit = angular.copy(Beta);
  $scope.editingBeta = true;
};
$scope.cancelEdit = function() {
  $scope.BetaToEdit = null;
};

});
