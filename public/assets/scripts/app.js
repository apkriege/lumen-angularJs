var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/pages/home.html',
        controller: 'homeController'
    });
    //$routeProvider.when('/test', {
    //    templateUrl: '/views/second.html',
    //    controller: 'testController'
    //});
    $routeProvider.otherwise({redirectTo: '/' });

});

myApp.controller('homeController', function ($scope){
    console.log('this is the home controller');
});

