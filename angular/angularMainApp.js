var angularMainApp = angular.module('angularMainApp', [
  'ngRoute',
  'templates',
  'angularFileUpload'
  ]
);

var configFunction = function($routeProvider, $httpProvider, $locationProvider) {
  // needed to submit forms with rails
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $locationProvider.hashPrefix('!').html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when('/', {
    templateUrl: 'views/angularIndex.html',
    controller: 'indexController'
  }).otherwise( { redirectTo: '/'});
};

//injector
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

//app config
angularMainApp.config(configFunction);

//controllers
angularMainApp.controller('indexController', indexController);
angularMainApp.controller('uploadsController', uploadsController);
