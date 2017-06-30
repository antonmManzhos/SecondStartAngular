var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller("LandingController", LandingController);
myApp.controller("LoginController", LoginController);
myApp.controller("RegisterController", RegisterController);

myApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
myApp.factory('LoginFactory', LoginFactory);
myApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/routeOne', {
        templateUrl: "RoutesDemo/One"
    })
    .when('/routeSecond/:donuts', {
        templateUrl: function (params) {
            return '/routesDemo/Second?donuts=' + params.donuts;
        }
    })
    .when('/routeThird', {
        templateUrl: "RoutesDemo/Third"
    })
    .when('/login', {
        templateUrl: 'Account/Login',
        controller: 'LoginController'
    })
    .when('/register', {
        templateUrl: 'Account/Register',
        controller: 'RegisterController'
    });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider','$httpProvider'];

myApp.config(configFunction);