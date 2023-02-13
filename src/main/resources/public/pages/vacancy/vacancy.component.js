'use strict';

angular.module('vacancy')
    .component('vacancy', {
        templateUrl: 'pages/vacancy/vacancy.template.html',
        controller: 'VacancyController'
    })
    .controller('VacancyController', ['VacancyService', '$rootScope', '$routeParams', '$location', '$route',
        function (VacancyService, $rootScope, $routeParams, $location, $route) {
            var that = this;
            var vacancyId = $routeParams.id;

            VacancyService.GetData(vacancyId).then(function (response) {
                that.vacancy = response;
            });

            that.Update = function () {
                VacancyService.UpdateData(that.vacancy).then(function () {
                    $route.reload();
                });
            }

            that.Delete = function () {
                VacancyService.Delete(vacancyId).then(function () {
                    $location.path('/home');
                });
            }

            that.isRecruiter = function () {
                return $rootScope.role === 'RECRUITER';
            }
        }
    ]);