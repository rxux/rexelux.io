"use strict";angular.module("rexeluxioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","hc.marked","hljs","infinite-scroll","ncy-angular-breadcrumb","contentful","ui.bootstrap","embedCodepen","evgenyneu.markdown-preview"]).config(["hljsServiceProvider",function(a){a.setOptions({tabReplace:"    "})}]).config(["contentfulProvider",function(a){a.setOptions({space:"d9ue08nhxkkm",accessToken:"7c18b3ed7eb6b7e20633fb2f12919c13358a1176fa52fe0ee551a2a690022da9"})}]).config(["$sceDelegateProvider",function(a){a.resourceUrlWhitelist(["self","http://codepen.io/**"])}]).run(["$rootScope","$location","$state","$stateParams",function(a,b,c,d){a.$on("$stateChangeSuccess",function(b,c,d,e,f){"home"===c.module?a.showBreadcrumbs=!1:a.showBreadcrumbs=!0})}]).directive("mmenu",function(){return{scope:!0,restrict:"A",link:function(a,b,c){a.$watch("entries",function(){$(b).mmenu({})})}}}).directive("hamburger",function(){return{restrict:"A",link:function(a,b,c){var d=$("#menu").data("mmenu"),e=$("#mm-blocker");d.init($("#mmenu-list")),$(b).click(function(){$(this).hasClass("active")?(d.close(),$(b).removeClass("active")):(d.init($("#mmenu-list")),$(b).addClass("active"))}),e.click(function(){$(b).hasClass("active")&&(d.close(),$(b).removeClass("active"))}),d.bind("closed",function(){d.closeAllPanels()})}}}),angular.module("rexeluxioApp").controller("CategoryController",["$scope","$stateParams",function(a,b){a.whichCat=b.catName,a.whichSubCat=b.subCatName}]),angular.module("rexeluxioApp").controller("jsonCtrl",["$scope","$http",function(a,b){b.get("styles.json").success(function(b){a.styles=b,a.totalDisplayed=1,a.loadMore=function(){a.totalDisplayed+=1}})}]).directive("scrollToItem",function(){return{restrict:"A",scope:{scrollTo:"@"},link:function(a,b,c){b.on("click",function(){$("html,body").animate({scrollTop:$(a.scrollTo).offset().top},"slow")})}}}),angular.module("rexeluxioApp").controller("StyleController",["$scope","$http","$stateParams",function(a,b,c,d){b.get("styles.json").success(function(b){a.styles=b,a.whichStyle=c.styleName}),a.currentPath=d.path()}]),angular.module("rexeluxioApp").controller("MainController",["$scope","$http","$stateParams","$location","contentful",function(a,b,c,d,e){a.siteTitle="E-Commerce Style Guide",e.entries().then(function(b){var c=b.data.items;console.log(c),a.entries=c},function(a){console.log("Oops, error "+a.status)})}]),angular.module("rexeluxioApp").controller("footerCtrl",["$scope",function(a){a.date=new Date}]),angular.module("rexeluxioApp").filter("reverse",function(){return function(a){return angular.isArray(a)?a.slice().reverse():[]}}),angular.module("rexeluxioApp").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){a.state("home",{url:"/",templateUrl:"views/home.html",module:"home",ncyBreadcrumb:{label:"home"}}).state("categories",{url:"/categories",templateUrl:"views/categories.html",controller:"CategoryController",ncyBreadcrumb:{label:"categories",parent:"home"}}).state("categories.catName",{url:"/{catName}",templateUrl:"views/category_no_tabs.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichCat}}"}}).state("categories.catDetail",{url:"/{catName}/{subCatName}",templateUrl:"views/category.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichSubCat}}",parent:"categories.catName"}}).state("styles",{url:"/styles",templateUrl:"views/styles.html",controller:"jsonCtrl",ncyBreadcrumb:{label:"style guide",parent:"home"}}).state("styles.styleName",{url:"/{styleName}",templateUrl:"views/style.html",controller:"StyleController",ncyBreadcrumb:{label:"{{whichStyle}}"}}),b.otherwise("/")}]);