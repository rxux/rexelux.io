'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('CategoryController', function ($scope, $stateParams) {
      $scope.whichCat = $stateParams.catName;
      $scope.whichSubCat = $stateParams.subCatName;


  });

