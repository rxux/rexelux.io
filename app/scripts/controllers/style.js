'use strict';
/**
 * @ngdoc function
 * @name rexeluxioApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('rexeluxioApp')
	
  .controller('StyleController', ['$scope', '$http', '$stateParams',  function($scope, $http, $stateParams) {
    $http.get('styles.json').success(function(data) {
      $scope.styles = data;
      $scope.whichStyle = $stateParams.styleName;

      // if ($routeParams.styleId > 0) {
      // 	$scope.prevStyle = Number($routeParams.styleId)-1;
      // } else {
      // 	$scope.prevStyle = $scope.styles.length-1;
      // }

      // if ($routeParams.styleId < $scope.styles.length-1) {
      // 	$scope.nextStyle = Number($routeParams.styleId)+1;
      // } else {
      // 	$scope.nextStyle = 0;
      // }

    });

}]);


