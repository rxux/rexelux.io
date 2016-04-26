"use strict";angular.module("rexeluxioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","hc.marked","hljs","infinite-scroll","ncy-angular-breadcrumb","contentful","ui.bootstrap","embedCodepen","evgenyneu.markdown-preview"]).config(["hljsServiceProvider",function(hljsServiceProvider){hljsServiceProvider.setOptions({tabReplace:"    "})}]).config(["contentfulProvider",function(contentfulProvider){contentfulProvider.setOptions({space:"d9ue08nhxkkm",accessToken:"7c18b3ed7eb6b7e20633fb2f12919c13358a1176fa52fe0ee551a2a690022da9"})}]).config(["$sceDelegateProvider",function($sceDelegateProvider){$sceDelegateProvider.resourceUrlWhitelist(["self","http://codepen.io/**","http://assets.codepen.io/**"])}]).filter("trustUrl",["$sce",function($sce){return function(url){return $sce.trustAsResourceUrl(url)}}]).filter("underscoreless",function(){return function(input){return input.replace(/_/g," ")}}).filter("capitalize",function(){return function(input,all){var reg=all?/([^\W_]+[^\s-]*) */g:/([^\W_]+[^\s-]*)/;return input?input.replace(reg,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()}):""}}).run(["$rootScope","$location","$state","$stateParams",function($rootScope,$location,$state,$stateParams){$rootScope.$on("$stateChangeSuccess",function(event,toState,toParams,fromState,fromParams){"home"===toState.module?$rootScope.showBreadcrumbs=!1:$rootScope.showBreadcrumbs=!0})}]).directive("mmenu",["$timeout",function($timeout){return{scope:!0,restrict:"A",link:function($scope,element){$timeout(function(){$(element).mmenu({extensions:["widescreen"]})},0),$timeout(function(){$scope.contentLoaded=!0},0)}}}]).directive("hamburger",function(){return{restrict:"A",link:function(scope,element,attrs){var Blocker=$("#mm-blocker");$(element).click(function(){$(this).hasClass("active")?($("#menu").data("mmenu").close(),$(element).removeClass("active")):($("#menu").data("mmenu").init($("#mmenu-list")),$(element).addClass("active"))}),Blocker.click(function(){$(element).hasClass("active")&&($("#menu").data("mmenu").close(),$(element).removeClass("active"))})}}}),angular.module("rexeluxioApp").controller("TypeaheadController",["$scope","$http",function($scope,$http){var _selected;$scope.selected=void 0,$scope.getLocation=function(val){return $http.get("//maps.googleapis.com/maps/api/geocode/json",{params:{address:val,sensor:!1}}).then(function(response){return response.data.results.map(function(item){return item.formatted_address})})},$scope.ngModelOptionsSelected=function(value){return arguments.length?void(_selected=value):_selected},$scope.modelOptions={debounce:{"default":500,blur:250},getterSetter:!0},$scope.statesWithFlags=[{name:"Alabama",flag:"5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"},{name:"Alaska",flag:"e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"},{name:"Arizona",flag:"9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"},{name:"Arkansas",flag:"9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"},{name:"California",flag:"0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"},{name:"Colorado",flag:"4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"},{name:"Connecticut",flag:"9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"},{name:"Delaware",flag:"c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"},{name:"Florida",flag:"f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"},{name:"Georgia",flag:"5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"},{name:"Hawaii",flag:"e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"},{name:"Idaho",flag:"a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"},{name:"Illinois",flag:"0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"},{name:"Indiana",flag:"a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"},{name:"Iowa",flag:"a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"},{name:"Kansas",flag:"d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"},{name:"Kentucky",flag:"8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"},{name:"Louisiana",flag:"e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"},{name:"Maine",flag:"3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"},{name:"Maryland",flag:"a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"},{name:"Massachusetts",flag:"f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"},{name:"Michigan",flag:"b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"},{name:"Minnesota",flag:"b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"},{name:"Mississippi",flag:"4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"},{name:"Missouri",flag:"5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"},{name:"Montana",flag:"c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"},{name:"Nebraska",flag:"4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"},{name:"Nevada",flag:"f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"},{name:"New Hampshire",flag:"2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"},{name:"New Jersey",flag:"9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"},{name:"New Mexico",flag:"c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"},{name:"New York",flag:"1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"},{name:"North Carolina",flag:"b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"},{name:"North Dakota",flag:"e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"},{name:"Ohio",flag:"4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"},{name:"Oklahoma",flag:"6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"},{name:"Oregon",flag:"b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"},{name:"Pennsylvania",flag:"f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"},{name:"Rhode Island",flag:"f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"},{name:"South Carolina",flag:"6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"},{name:"South Dakota",flag:"1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"},{name:"Tennessee",flag:"9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"},{name:"Texas",flag:"f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"},{name:"Utah",flag:"f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"},{name:"Vermont",flag:"4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"},{name:"Virginia",flag:"4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"},{name:"Washington",flag:"5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"},{name:"West Virginia",flag:"2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"},{name:"Wisconsin",flag:"2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"},{name:"Wyoming",flag:"b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"}]}]),angular.module("rexeluxioApp").controller("BucketController",["$scope","$stateParams",function($scope,$stateParams){$scope.whichBucket=$stateParams.bucketName,$scope.whichSubBucket=$stateParams.subBucketName,$scope.totalDisplayed=1,$scope.loadMore=function(){$scope.totalDisplayed+=1}}]),angular.module("rexeluxioApp").controller("CategoryController",["$scope","$stateParams",function($scope,$stateParams){$scope.whichCat=$stateParams.catName,$scope.whichSubCat=$stateParams.subCatName,$scope.totalDisplayed=1,$scope.loadMore=function(){$scope.totalDisplayed+=1}}]),angular.module("rexeluxioApp").controller("jsonCtrl",["$scope","$http",function($scope,$http){$http.get("styles.json").success(function(data){$scope.styles=data,$scope.totalDisplayed=1,$scope.loadMore=function(){$scope.totalDisplayed+=1}})}]).directive("scrollToItem",function(){return{restrict:"A",scope:{scrollTo:"@"},link:function(scope,$elm,attr){$elm.on("click",function(){$("html,body").animate({scrollTop:$(scope.scrollTo).offset().top},"slow")})}}}),angular.module("rexeluxioApp").controller("StyleController",["$scope","$http","$stateParams",function($scope,$http,$stateParams,$location){$http.get("styles.json").success(function(data){$scope.styles=data,$scope.whichStyle=$stateParams.styleName}),$scope.currentPath=$location.path()}]),angular.module("rexeluxioApp").controller("MainController",["$scope","$http","$stateParams","$location","contentful",function($scope,$http,$stateParams,$location,contentful){$scope.siteTitle="E-Commerce Style Guide",contentful.entries().then(function(response){var entries=response.data.items;$scope.entries=entries},function(response){console.log("Oops, error "+response.status)})}]),angular.module("rexeluxioApp").controller("footerCtrl",["$scope",function($scope){$scope.date=new Date}]),angular.module("rexeluxioApp").filter("reverse",function(){return function(items){return angular.isArray(items)?items.slice().reverse():[]}}),angular.module("rexeluxioApp").config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$stateProvider.state("home",{url:"/",templateUrl:"views/home.html",module:"home",ncyBreadcrumb:{label:"home"}}).state("api",{url:"/api",templateUrl:"views/partials/api.html",controller:"MainController",ncyBreadcrumb:{label:"api",parent:"home"}}).state("bucketName",{url:"/{bucketName}",templateUrl:"views/bucket.html",controller:"BucketController",ncyBreadcrumb:{label:"{{whichBucket | underscoreless | capitalize:true}}",parent:"home"}}).state("bucketDetail",{url:"/{bucketName}/{subBucketName}",templateUrl:"views/subBucket.html",controller:"BucketController",ncyBreadcrumb:{label:"{{whichSubBucket | underscoreless | capitalize:true}}",parent:"bucketName"}}).state("categories",{url:"/categories",templateUrl:"views/categories.html",controller:"CategoryController",ncyBreadcrumb:{label:"categories",parent:"home"}}).state("categories.catName",{url:"/{catName}",templateUrl:"views/category_no_tabs.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichCat | capitalize:true}}"}}).state("categories.catDetail",{url:"/{catName}/{subCatName}",templateUrl:"views/category.html",controller:"CategoryController",ncyBreadcrumb:{label:"{{whichSubCat | capitalize:true}}",parent:"categories.catName"}}).state("styles",{url:"/styles",templateUrl:"views/styles.html",controller:"jsonCtrl",ncyBreadcrumb:{label:"style guide",parent:"home"}}).state("styles.styleName",{url:"/{styleName}",templateUrl:"views/style.html",controller:"StyleController",ncyBreadcrumb:{label:"{{whichStyle | capitalize:true}}"}}),$urlRouterProvider.otherwise("/")}]);