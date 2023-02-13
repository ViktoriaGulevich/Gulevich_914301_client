'use strict';

angular.module('toSend')
    .factory('ToSendService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.GetData = function () {
                return $http.get($rootScope.rootPath + '/resume/to-send').then(function (response) {
                    return response.data;
                });
            };

            service.Delete = function (id) {
                return $http.patch($rootScope.rootPath + '/resume/to-send', id).then(function (response) {
                    return response.data;
                });
            };

            service.Send = function (text) {
                return $http.post($rootScope.rootPath + '/resume/send', text);
            };

            return service;
        }
    ]);