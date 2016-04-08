'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('MainController', function ($scope, $location) {
    $scope.siteTitle = 'E-Commerce Style Guide';
    $scope.currentPath = $location.path();

  });

