'use strict';

var clientApp = angular.module('clientApp', [
    'clientFilters',
    'clientServices',
    'clientControllers',
    'ngRoute'
]);

clientApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/clients',
            controller: 'ClientListCtrl',
            title: 'Client app'
        })
        .when('/add', {
            templateUrl: 'views/edit',
            controller: 'ClientEditCtrl',
            title: 'Client add'
        })
        .when('/edit/:clientId', {
            templateUrl: 'views/edit',
            controller: 'ClientEditCtrl',
            title: 'Client edit'
        });
});

clientApp.run(function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
});
