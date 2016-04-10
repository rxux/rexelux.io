'use strict';

/**
 * @ngdoc overview
 * @name rexeluxioApp
 * @description
 * # rexeluxioApp
 *
 * Main module of the application.
 */
angular.module('rexeluxioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'hc.marked',
    "hljs",
    "infinite-scroll",
    "ncy-angular-breadcrumb",
    "contentful",
    "ui.bootstrap"
  ])

  .config(function (hljsServiceProvider) {
      hljsServiceProvider.setOptions({
          // replace tab with 4 spaces
          tabReplace: '    '
      });
  })
  .config(function(contentfulProvider){
    contentfulProvider.setOptions({
        space: 'd9ue08nhxkkm',
        accessToken: '7c18b3ed7eb6b7e20633fb2f12919c13358a1176fa52fe0ee551a2a690022da9'
    });
})
  .run([
    '$rootScope','$location','$state','$stateParams',/*'$templateCache',*/
    function (

        $rootScope,   $location,  $state,  $stateParams/*,  $templateCache*/  ) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

            if (toState.module === 'home') {
                $rootScope.showBreadcrumbs = false;
            } else {
                $rootScope.showBreadcrumbs = true;
            };
        });
    }])
  .directive('mmenu', function() {
        return {
            scope: true,
            restrict: 'A',
            link: function ($scope, element, attrs) {
                $scope.$watch('entries', function() {
                    $(element).mmenu({});
                })

            }
        }
    })




  .directive('hamburger', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var API = $("#menu").data( "mmenu" );
            var Blocker = $('#mm-blocker');
            API.init( $("#mmenu-list"));
            $(element).click(function() {
                if ($(this).hasClass('active')) {
                    API.close();
                    $(element).removeClass('active');
                } else {
                    API.init( $("#mmenu-list"));
                    $(element).addClass('active');
                }
            });

            Blocker.click(function() {
                if ($(element).hasClass('active')) {
                    API.close();
                    $(element).removeClass('active');
                }
            });
            API.bind( "closed", function() {
                API.closeAllPanels();
            });
        }
    }
});
