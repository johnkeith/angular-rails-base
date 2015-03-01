var angularMain = angular.module('angularMain', ['ngRoute']);

var configFunction = function($routeProvider, $httpProvider, $locationProvider) {

  // needed to submit forms with rails
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $locationProvider.hashPrefix('!').html5Mode({
     enabled: true,
     requireBase: false
  });

  $routeProvider.when('/', {
   templateUrl: 'views/index.html',
   controller: 'IndexController'
  }).otherwise( { redirectTo: '/'});
}

//injector
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

//app config
angularMain.config(configFunction);

//controllers
// angularMain.controller('frmController', frmController);

//directives
// angularMain.directive('a', aPrevDefault);