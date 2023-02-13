'use strict';

angular.module('addVacancy')
    .component('addVacancy', {
        templateUrl: 'pages/add-vacancy/add-vacancy.template.html',
        controller: 'AddVacancyController'
    })
    .controller('AddVacancyController', ['AddVacancyService', '$routeParams', '$location',
        function (AddVacancyService, $routeParams, $location) {
            var that = this;

            that.Add = function () {
                AddVacancyService.AddData(that.vacancy).then(function () {
                    $location.path('/home');
                });
            };
        }
    ]);