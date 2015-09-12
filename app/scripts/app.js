'use strict';

/**
 * @ngdoc overview
 * @name rexeluxioApp
 * @description
 * # rexeluxioApp
 *
 * Main module of the application.
 */
angular.module('rexeluxioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ui.router'
  ])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
          .otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
  });
