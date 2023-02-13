'use strict';

angular.module('reportList')
    .factory('ReportListService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/report').then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);