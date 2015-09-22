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
    'ui.router',
    'hc.marked',
    "hljs",
    "infinite-scroll"
  ])

  .config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    });
});
