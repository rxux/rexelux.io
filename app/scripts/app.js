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
    "contentful"
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

    .directive('mmenu', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).mmenu({});
            }
        }
    })

    .directive('hamburger', function() {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var API = $("#menu").data( "mmenu" );
            var Blocker = $('#mm-blocker');

            $(element).click(function() {
                if ($(this).hasClass('active')) {
                    API.close();
                    $(element).removeClass('active');
                } else {
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
