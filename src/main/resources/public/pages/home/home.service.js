'use strict';

angular.module('home')
    .factory('HomeService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/user').then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);