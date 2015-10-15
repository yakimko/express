'use strict';

var clientServices = angular.module('clientServices', ['ngResource']);

clientServices.factory('Client', ['$resource', function ($resource) {
    return $resource('/clients/:id', null, {
        update: {
            method: 'PUT'
        }
    });
}]);