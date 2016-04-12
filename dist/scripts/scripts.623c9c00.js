"use strict";angular.module("rexeluxioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","hc.marked","hljs","infinite-scroll","ncy-angular-breadcrumb","contentful","ui.bootstrap","embedCodepen","evgenyneu.markdown-preview"]).config(["hljsServiceProvider",function(hljsServiceProvider){hljsServiceProvider.setOptions({tabReplace:"    "})}]).config(["contentfulProvider",function(contentfulProvider){contentfulProvider.setOptions({space:"d9ue08nhxkkm",accessToken:"7c18b3ed7eb6b7e20633fb2f12919c13358a1176fa52fe0ee551a2a690022da9"})}]).config(["$sceDelegateProvider",function($sceDelegateProvider){$sceDelegateProvider.resourceUrlWhitelist(["self","http://codepen.io/**","http://assets.codepen.io/**"])}]).filter("trustUrl",["$sce",function($sce){return function(url){return $sce.trustAsResourceUrl(url)}}]).run(["$rootScope","$location","$state","$stateParams",function($rootScope,$location,$state,$stateParams){$rootScope.$on("$stateChangeSuccess",function(event,toState,toParams,fromState,fromParams){"home"===toState.module?$rootScope.showBreadcrumbs=!1:$rootScope.showBreadcrumbs=!0})}]).directive("mmenu",function(){return{scope:!0,restrict:"A",link:function($scope,element,attrs){$scope.$watch("entries",function(){$(element).mmenu({})})}}}).directive("hamburger",function(){return{restrict:"A",link:function(scope,element,attrs){var Blocker=$("#mm-blocker");$(element).click(function(){$(this).hasClass("active")?($("#menu").data("mmenu").close(),$(element).removeClass("active")):($("#menu").data("mmenu").init($("#mmenu-list")),$(element).addClass("active"))}),Blocker.click(function(){$(element).hasClass("active")&&($("#menu").data("mmenu").close(),$(element).removeClass("active"))}),$("#menu").data("mmenu").bind("closed",function(){$("#menu").data("mmenu").closeAllPanels()})}}}),angular.module("rexeluxioApp").controller("CategoryController",["$scope","$stateParams",function($scope,$stateParams){$scope.whichCat=$stateParams.catName,$scope.whichSubCat=$stateParams.subCatName}]),angular.module("rexeluxioApp").controller("jsonCtrl",["$scope","$http",function($scope,$http){$http.get("styles.json").success(function(data){$scope.styles=data,$scope.totalDisplayed=1,$scope.loadMore=function(){$scope.totalDisplayed+=1}})}]).directive("scrollToItem",function(){return{restrict:"A",scope:{scrollTo:"@"},link:function(scope,$elm,attr){$elm.on("click",function(){$("html,body").animate({scrollTop:$(scope.scrollTo).offset().top},"slow")})}}}),angular.module("rexeluxioApp").controller("StyleController",["$scope","$http","$stateParams",function($scope,$http,$stateParams,$location){$http.get("styles.json").success(function(data){$scope.styles=data,$scope.whichStyle=$stateParams.styleName}),$scope.currentPath=$location.path()}]),angular.module("rexeluxioApp").controller("MainController",["$scope","$http","$stateParams","$location","contentful",function($scope,$http,$stateParams,$location,contentful){$scope.siteTitle="E-Commerce Style Guide",contentful.entries().then(function(response){var entries=response.data.items;console.log(entries),$scope.entries=entries},function(response){console.log("Oops, error "+response.status)})}]),angular.module("rexeluxioApp").controller("footerCtrl",["$scope",function($scope){$scope.date=new Date}]),angular.module("rexeluxioApp").filter("reverse",function(){return function(items){return angular.isArray(items)?items.slice().reverse():[]}}),angular.module("rexeluxioApp").config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$stateProvider.state("home",{url:"/",templateUrl:"views/home.html",module:"home",ncyBreadcrumb:{label:"home"}}).state("categories",{url:"/categories",templateUrl:"views/categories.html",controller:"CategoryController",ncyBreadcrumb:{label:"categories",parent:"home"}}).state("categories.catName",{url:"/{catName}",templateUrl:"views/category_no_tabs.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichCat}}"}}).state("categories.catDetail",{url:"/{catName}/{subCatName}",templateUrl:"views/category.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichSubCat}}",parent:"categories.catName"}}).state("styles",{url:"/styles",templateUrl:"views/styles.html",controller:"jsonCtrl",ncyBreadcrumb:{label:"style guide",parent:"home"}}).state("styles.styleName",{url:"/{styleName}",templateUrl:"views/style.html",controller:"StyleController",ncyBreadcrumb:{label:"{{whichStyle}}"}}),$urlRouterProvider.otherwise("/")}]);