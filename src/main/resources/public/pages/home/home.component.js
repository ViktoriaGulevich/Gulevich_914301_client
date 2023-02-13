'use strict';

angular.module('home')
    .component('home', {
        templateUrl: 'pages/home/home.template.html',
        controller: 'HomeController'
    })
    .controller('HomeController', ['HomeService', 'SignInService', '$location', '$rootScope',
        function HomeListController(HomeService, SignInService, $location, $rootScope) {
            var that = this;
            HomeService.GetData().then(function (response) {
                that.login = response.login;
                that.resumeId = response.resumeId + '';
                that.vacancyId = response.vacancyId;

                $rootScope.role = response.role;
                that.isUser = function () {
                    return $rootScope.role === 'USER';
                }
                that.isRecruiter = function () {
                    return $rootScope.role === 'RECRUITER';
                }
                that.isExistsResume = function () {
                    return response.resumeId != 0;
                }
                that.isExistsVacancy = function () {
                    return response.vacancyId != 0;
                }
            });

            this.logout = function () {
                SignInService.ClearCredentials();
                $location.path('/sign-in');
            };
        }
    ]);