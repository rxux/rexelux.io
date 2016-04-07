'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('footerCtrl', function ($scope) {
    $scope.date = new Date();
  });

