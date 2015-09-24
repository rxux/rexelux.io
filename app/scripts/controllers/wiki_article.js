'use strict';
/**
 * @ngdoc function
 * @name rexeluxioApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('rexeluxioApp')
	
  .controller('WikiArticleController', ['$scope', '$http', '$stateParams',  function($scope, $http, $stateParams) {
    $http.get('wiki.json').success(function(data) {
      $scope.wikis = data;
      $scope.whichArticle = $stateParams.articleName;

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


