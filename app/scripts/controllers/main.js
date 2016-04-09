'use strict';

/**
 * @ngdoc function
 * @name rexeluxioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rexeluxioApp
 */
angular.module('rexeluxioApp')
  .controller('MainController', function ($scope, $http, $stateParams, $location, contentful) {
    $scope.siteTitle = 'E-Commerce Style Guide';
    //$scope.currentPath = $location.path();

      contentful.entries().then(
        // Success handler
          function(response){
              var entries = response.data.items;
              console.log(entries);
              $scope.entries = entries;
          },
          // Error handler
          function(response){
              console.log('Oops, error ' + response.status);
          }
      );
  });


