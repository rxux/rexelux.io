'use strict';

angular.module('rexeluxioApp')

  .controller('WikiController', ['$scope', '$http',  function ($scope, $http) {
    $http.get('wiki.json').success(function(data) {
      $scope.wikis = data;
    });
 
}]);