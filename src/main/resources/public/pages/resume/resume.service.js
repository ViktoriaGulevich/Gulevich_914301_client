'use strict';

angular.module('resume')
    .factory('ResumeService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function (id) {
                return $http.get($rootScope.rootPath + '/resume/' + id).then(function (response) {
                    return response.data;
                });
            };

            service.UpdateData = function (resume) {
                return $http.patch($rootScope.rootPath + '/resume', resume).then(function (response) {
                    return response.data;
                });
            };

            service.Delete = function (id) {
                return $http.delete($rootScope.rootPath + '/resume/' + id);
            };

            return service;
        }
    ]);