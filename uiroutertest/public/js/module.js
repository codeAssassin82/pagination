'use strict';

var app = angular.module('routingApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // .state(stateName,  obj. makes the characteristics of the state)

    .state('home', {url: '/', templateUrl: '/html/home.html'})
    .state('about', {url: '/about/:url', templateUrl: '/html/about.html', controller: 'aboutCtrl' })
    .state('swPeople', {url: '/people', templateUrl: '/html/people.html', controller: 'peopleCtrl' })

    $urlRouterProvider.otherwise('/');
});

app.run(function(SwapiService) {

  SwapiService.getPeople(1);

  console.log('app.run!!!');
}); // closes thing to init
