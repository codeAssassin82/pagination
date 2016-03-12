'use strict';

var app = angular.module('myApp', []);
// var app not needed
// name of module
// second arg has to be array to declare a new module
// new module angular.module( appName, dependency array )
// existing module angular.module( appName )

app.controller('mainCtrl', function($scope, $http) {

	$scope.names = ['Ray', 'Tiff', 'John', 'Jovi'];

	$scope.addName = function() {
		var names = $scope.newName.split(',');
		// names = names.map(names => name.trim());
		names.forEach(function(name){
			$scope.names.push(name);
		});
		$scope.newName = '';
	};

	$scope.todos = [];

	$scope.addTask = function(){
	$scope.newTodo.complete = false;
	var todo = angular.copy($scope.newTodo);
	$scope.todos.push(todo)
  $scope.newTodo = {};
	};

  $scope.deleteTodo = function(todo) {
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index, 1);
  };
  $scope.getWeather = fucntion() {
    console.log('Rainy!');
    $http({
      method: 'GET',
      url:'http://api.wunderground.com/api/5422ccc35058b5cb/conditions/q/CA/San_Francisco.json'
    })
    .then(function(res) {
      console.log('res:',res);
    }, function(err) {
      console.error(err);
    });
  };////check syntax
});
// angular.module('myApp', [])
// .controller()
// the 2 different ways to attach controller
// first arg is name of controller
// second is the function
