'use strict';

angular.module('vacancy')
    .factory('VacancyService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function (id) {
                return $http.get($rootScope.rootPath + '/vacancy/' + id).then(function (response) {
                    return response.data;
                });
            };

            service.UpdateData = function (vacancy) {
                return $http.patch($rootScope.rootPath + '/vacancy', vacancy).then(function (response) {
                    return response.data;
                });
            };

            service.Delete = function (id) {
                return $http.delete($rootScope.rootPath + '/vacancy/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            };

            return service;
        }
    ]);