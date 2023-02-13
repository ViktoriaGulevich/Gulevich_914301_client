'use strict';

angular.module('favorites')
    .factory('FavoritesService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/resume/favorites').then(function (response) {
                    return response.data;
                });
            };

            service.Add = function (id) {
                return $http.post($rootScope.rootPath + '/resume/to-send', id).then(function (response) {
                    return response.data;
                });
            };

            service.Delete = function (id) {
                return $http.patch($rootScope.rootPath + '/resume/favorites', id).then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);