'use strict';

angular.module('signIn')
    .factory('SignInService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.SignIn = function (login, password) {
                var authdata = btoa(login + ':' + password);

                return $http.get($rootScope.rootPath + '/user/login', {
                    headers: {
                        authorization: 'Basic ' + authdata
                    }
                });
            };

            service.SetCredentials = function (login, password) {
                var authdata = btoa(login + ':' + password);

                $rootScope.authenticated = true;
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            };

            service.ClearCredentials = function () {
                $rootScope.authenticated = false;
                $http.defaults.headers.common.Authorization = '';
            };

            return service;
        }
    ]);