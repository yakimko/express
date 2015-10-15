var clientFilters = angular.module('clientFilters', []);

clientFilters.filter('phoneMask', function () {
    return function (phoneNumber) {
        return phoneNumber ? phoneNumber.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, function(s, a, b, c, d) {
            return '(' + a + ') ' + b + '-' + c + '-' + d;
        }) : '';
    };
});

clientFilters.filter('personalNumberMask', function () {
    return function (personalNumber) {
        return personalNumber ? personalNumber.replace(/^(\d{3})(\d{2})(\d{4})$/, function(s, a, b, c) {
            return 'XXX-XX-' + c;
        }) : '';
    };
});