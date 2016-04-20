'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:footerCtrl
 * @description
 * # FooterCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('footerCtrl', function ($scope) {
    $scope.date = new Date();
  });

