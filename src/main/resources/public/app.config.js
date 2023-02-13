'use strict';

angular.module('appMain')
    .config(['$routeProvider', '$httpProvider',
        function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/sign-in', {
                    template: '<sign-in></sign-in>'
                })
                .when('/sign-up', {
                    template: '<sign-up></sign-up>'
                })
                .when('/home', {
                    template: '<home></home>'
                })
                .when('/resume-list', {
                    template: '<resume-list></resume-list>'
                })
                .when('/resume/:id', {
                    template: '<resume></resume>'
                })
                .when('/favorites', {
                    template: '<favorites></favorites>'
                })
                .when('/to-send', {
                    template: '<to-send></to-send>'
                })
                .when('/add-resume', {
                    template: '<add-resume></add-resume>'
                })
                .when('/vacancy-list', {
                    template: '<vacancy-list></vacancy-list>'
                })
                .when('/vacancy/:id', {
                    template: '<vacancy></vacancy>'
                })
                .when('/add-vacancy', {
                    template: '<add-vacancy></add-vacancy>'
                })
                .when('/report', {
                    template: '<report-list></report-list>'
                })

                .otherwise('/home');

            $httpProvider.interceptors.push('responseInterceptorService');
        }
    ])
    .run(['$rootScope', '$location',
        function ($rootScope, $location) {
            $rootScope.$on('$locationChangeStart', function () {
                if (!$rootScope.rootPath) {
                    $rootScope.rootPath = 'http://localhost:8080';
                }

                if (!$rootScope.authenticated) {
                    if ($location.path() !== '/sign-up' && $location.path() !== '/sign-in') {
                        $location.path('/sign-in');
                    }
                } else {
                    if ($location.path() === '/sign-in' || $location.path() === '/sign-up') {
                        $location.path('/home');
                    }
                }
            });
        }
    ]);