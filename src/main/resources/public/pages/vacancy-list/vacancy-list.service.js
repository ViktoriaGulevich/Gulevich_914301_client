'use strict';

angular.module('vacancyList')
    .factory('VacancyListService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/vacancy').then(function (response) {
                    return response.data;
                });
            };

            service.Respond = function (id) {
                return $http.post($rootScope.rootPath + '/vacancy/respond', id);
            };

            return service;
        }
    ]);