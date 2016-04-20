'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('BucketController', function ($scope, $stateParams) {
      $scope.whichBucket = $stateParams.bucketName;
      $scope.whichSubBucket = $stateParams.subBucketName;
      $scope.totalDisplayed = 1;

      $scope.loadMore = function () {
          $scope.totalDisplayed += 1;
      };


  });

