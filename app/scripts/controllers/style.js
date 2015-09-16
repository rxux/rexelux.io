'use strict';
/**
 * @ngdoc function
 * @name rexeluxioApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('rexeluxioApp')
	
  .controller('StyleCtrl', ['$scope', '$http', '$routeParams',  function ($scope, $http, $routeParams) {
    $http.get('/styles.json').success(function(data) {
      $scope.styles = data;
      $scope.whichStyle = $routeParams.styleId;
    });

}]);


