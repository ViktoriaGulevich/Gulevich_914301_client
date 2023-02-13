'use strict';

angular.module('addResume')
    .factory('AddResumeService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.AddData = function (resume) {
                return $http.post($rootScope.rootPath + '/resume', resume).then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);