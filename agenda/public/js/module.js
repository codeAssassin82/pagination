'use strict'

var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('location', {
    url: '/',
    templateUrl: '/html/location.html',
    controller: "mainCtrl"
  })
  .state('destination', {
    url: '/destination',
    templateUrl: '/html/Destination.html',
    controller: 'destinationCtrl'
  })
  .state('locations', {
    url: '/locations/:id',
    templateUrl: '/html/locations.html',
    controller: 'locationCtrl'
  })
  .state('info', {
    url: '/info/:id',
    templateUrl: '/html/info.html',
    controller: 'locationCtrl'
  })


  $urlRouterProvider.otherwise('/');
})
