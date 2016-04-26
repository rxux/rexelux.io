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
    "ui.bootstrap",
    "embedCodepen",
    "evgenyneu.markdown-preview"
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
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://codepen.io/**',
            'http://assets.codepen.io/**']);
    })
    .filter('trustUrl', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    })
    .filter('underscoreless', function () {
        return function (input) {
            return input.replace(/_/g, ' ');
        };
    })
    .filter('capitalize', function() {
        return function(input, all) {
            var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
            return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
        }
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
  .directive('mmenu', function($timeout) {
        return {
            scope: true,
            restrict: 'A',
            link: function ($scope, element) {
                $timeout(function() {
                        $(element).mmenu({
                            extensions: ["widescreen"]
                        })
                }, 0);
                $timeout(function() {
                    $scope.contentLoaded = true;
                }, 0);


            }
        }
    })
  .directive('hamburger', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            //ar API = $("#menu").data( "mmenu" );
            var Blocker = $('#mm-blocker');
            $(element).click(function() {
                if ($(this).hasClass('active')) {
                    $("#menu").data( "mmenu" ).close();
                    $(element).removeClass('active');
                } else {
                    $("#menu").data( "mmenu" ).init( $("#mmenu-list"));
                    $(element).addClass('active');
                }
            });

            Blocker.click(function() {
                if ($(element).hasClass('active')) {
                    $("#menu").data( "mmenu" ).close();
                    $(element).removeClass('active');
                }
            });
        }
    }
});
