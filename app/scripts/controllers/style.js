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
    });

    

}]);


