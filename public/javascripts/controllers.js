'use strict';

var clientControllers = angular.module('clientControllers', []);

clientControllers.controller('ClientListCtrl', function ($scope, Client) {
    $scope.clients = Client.query();
    $scope.orderReverse = false;
    $scope.orderSign = function () {
        return $scope.orderReverse ? '\u25b2' : '\u25bc';
    };

    $scope.remove = function (clientId, client) {
        Client.remove({id: clientId}, function () {
            $scope.clients.splice($scope.clients.indexOf(client), 1);
        });
    };
});

clientControllers.controller('ClientEditCtrl', function ($scope, Client, $location, $routeParams) {
    $scope.client = {
        notes: [],
        accounts: []
    };

    if ($routeParams.clientId) {
        Client.get({id: $routeParams.clientId}, function (client) {
            angular.merge($scope.client, client);
            $scope.orig = angular.copy($scope.client);
        });
    } else {
        $scope.orig = angular.copy($scope.client);
    }

    $scope.save = function () {
        $scope.client.accounts = $scope.client.accounts.filter(function (account) {
            return account.number && account.description;
        });

        $scope.client.notes = $scope.client.notes.filter(function (notes) {
            return notes.text;
        });

        if ($routeParams.clientId) {
            Client.update({id: $scope.client._id}, $scope.client, function () {
                $location.path('/');
            });
        } else {
            Client.save($scope.client, function () {
                $location.path('/');
            });
        }
    };

    $scope.reset = function() {
        $scope.client = angular.copy($scope.orig);
    };

    $scope.cancel = function () {
        $location.path('/');
    };

    $scope.addAccount = function () {
        $scope.client.accounts.push({
            number: '',
            description: ''
        });
    };

    $scope.addNote = function () {
        $scope.client.notes.push({
            text: ''
        });
    };

    $scope.remove = function (array, item) {
        array.splice(array.indexOf(item), 1);
    }
});
