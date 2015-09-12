"use strict";angular.module("rexeluxioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","firebase","firebase.ref","firebase.auth","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode({enabled:!0,requireBase:!1})}]),angular.module("rexeluxioApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=[]}]).config(["$stateProvider",function(a){a.state("main",{url:"/",templateUrl:"app/views/main.html",controller:"MainCtrl"})}]),angular.module("firebase.config",[]).constant("FBURL","https://boiling-fire-6773.firebaseio.com").constant("SIMPLE_LOGIN_PROVIDERS",["password"]).constant("loginRedirectPath","/login"),angular.module("firebase.ref",["firebase","firebase.config"]).factory("Ref",["$window","FBURL",function(a,b){return new a.Firebase(b)}]),angular.module("rexeluxioApp").controller("ChatCtrl",["$scope","Ref","$firebaseArray","$timeout",function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.messages=c(b.child("messages").limitToLast(10)),a.messages.$loaded()["catch"](e),a.addMessage=function(b){b&&a.messages.$add({text:b})["catch"](e)}}]),angular.module("rexeluxioApp").filter("reverse",function(){return function(a){return angular.isArray(a)?a.slice().reverse():[]}}),function(){angular.module("firebase.auth",["firebase","firebase.ref"]).factory("Auth",["$firebaseAuth","Ref",function(a,b){return a(b)}])}(),angular.module("rexeluxioApp").controller("LoginCtrl",["$scope","Auth","$location","$q","Ref","$timeout",function(a,b,c,d,e,f){function g(a){return h(a.substr(0,a.indexOf("@"))||"")}function h(a){a+="";var b=a.charAt(0).toUpperCase();return b+a.substr(1)}function i(){c.path("/account")}function j(b){a.err=b}a.passwordLogin=function(c,d){a.err=null,b.$authWithPassword({email:c,password:d},{rememberMe:!0}).then(i,j)},a.createAccount=function(c,h,k){function l(a){var b=e.child("users",a.uid),h=d.defer();return b.set({email:c,name:g(c)},function(a){f(function(){a?h.reject(a):h.resolve(b)})}),h.promise}a.err=null,h?h!==k?a.err="Passwords do not match":b.$createUser({email:c,password:h}).then(function(){return b.$authWithPassword({email:c,password:h},{rememberMe:!0})}).then(l).then(i,j):a.err="Please enter a password"}}]),angular.module("rexeluxioApp").controller("AccountCtrl",["$scope","user","Auth","Ref","$firebaseObject","$timeout",function(a,b,c,d,e,f){function g(a){i(a,"danger")}function h(a){i(a,"success")}function i(b,c){var d={text:b+"",type:c};a.messages.unshift(d),f(function(){a.messages.splice(a.messages.indexOf(d),1)},1e4)}a.user=b,a.logout=function(){c.$unauth()},a.messages=[];var j=e(d.child("users/"+b.uid));j.$bindTo(a,"profile"),a.changePassword=function(b,d,e){a.err=null,b&&d?d!==e?g("Passwords do not match"):c.$changePassword({email:j.email,oldPassword:b,newPassword:d}).then(function(){h("Password changed")},g):g("Please enter all fields")},a.changeEmail=function(b,d){a.err=null,c.$changeEmail({password:b,newEmail:d,oldEmail:j.email}).then(function(){j.email=d,j.$save(),h("Email changed")})["catch"](g)}}]),angular.module("rexeluxioApp").directive("ngShowAuth",["Auth","$timeout",function(a,b){return{restrict:"A",link:function(c,d){function e(){b(function(){d.toggleClass("ng-cloak",!a.$getAuth())},0)}d.addClass("ng-cloak"),a.$onAuth(e),e()}}}]),angular.module("rexeluxioApp").directive("ngHideAuth",["Auth","$timeout",function(a,b){return{restrict:"A",link:function(c,d){function e(){b(function(){d.toggleClass("ng-cloak",!!a.$getAuth())},0)}d.addClass("ng-cloak"),a.$onAuth(e),e()}}}]),angular.module("rexeluxioApp").config(["$routeProvider","SECURED_ROUTES",function(a,b){a.whenAuthenticated=function(c,d){return d.resolve=d.resolve||{},d.resolve.user=["Auth",function(a){return a.$requireAuth()}],a.when(c,d),b[c]=!0,a}}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/chat",{templateUrl:"views/chat.html",controller:"ChatCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).whenAuthenticated("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location","Auth","SECURED_ROUTES","loginRedirectPath",function(a,b,c,d,e){function f(a){!a&&g(b.path())&&b.path(e)}function g(a){return d.hasOwnProperty(a)}c.$onAuth(f),a.$on("$routeChangeError",function(a,c,d,f){"AUTH_REQUIRED"===f&&b.path(e)})}]).constant("SECURED_ROUTES",{});