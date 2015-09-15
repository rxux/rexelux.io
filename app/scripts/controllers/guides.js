'use strict';
/**
 * @ngdoc function
 * @name rexeluxioApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('rexeluxioApp')

  .factory('Style', function($resource) {
  return $resource('styles/:styleId.json', {styleId: '@aid'});
})

  .controller('jsonCtrl', function ($scope, Style) {
  
  // Adults are from REST API
  $scope.styles = Style.query();
  
 
  
});


