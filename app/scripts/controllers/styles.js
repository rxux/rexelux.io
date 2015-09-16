'use strict';
/**
 * @ngdoc function
 * @name rexeluxioApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('rexeluxioApp')

  .controller('jsonCtrl', ['$scope', '$http',  function ($scope, $http) {
    $http.get('styles.json').success(function(data) {
      $scope.styles = data;
    });

}]);


