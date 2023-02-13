'use strict';

angular.module('signUp')
    .factory('SignUpService', ['$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.SignUp = function (user) {
                return $http.post($rootScope.rootPath + '/user', {
                    login: user.login,
                    email: user.email,
                    password: user.password
                });
            };

            return service;
        }
    ]);