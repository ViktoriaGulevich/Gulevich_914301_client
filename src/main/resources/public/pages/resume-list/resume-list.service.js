'use strict';

angular.module('resumeList')
    .factory('ResumeListService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/resume/all').then(function (response) {
                    return response.data;
                });
            };

            service.Add = function (id) {
                return $http.post($rootScope.rootPath + '/resume/favorites', id).then(function (response) {
                    return response.data;
                });
            };

            service.Find = function (filter) {
                return $http.post($rootScope.rootPath + '/resume/filter', filter).then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);