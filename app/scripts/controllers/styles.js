'use strict';

angular.module('rexeluxioApp')

  .controller('jsonCtrl', ['$scope', '$http',  function ($scope, $http) {
    $http.get('styles.json').success(function(data) {
      $scope.styles = data;
      $scope.totalDisplayed = 1;

      $scope.loadMore = function () {
        $scope.totalDisplayed += 1;  
      };
    });


}])
  .directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   

            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
            });                                                                              
        }                                                                                    
    }})



;


