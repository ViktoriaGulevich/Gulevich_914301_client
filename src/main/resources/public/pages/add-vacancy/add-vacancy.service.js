'use strict';

angular.module('addVacancy')
    .factory('AddVacancyService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.AddData = function (vacancy) {
                return $http.post($rootScope.rootPath + '/vacancy', vacancy).then(function (response) {
                    return response.data;
                });
            };

            return service;
        }
    ]);