
'use strict';

angular.module('vacancyList')
    .component('vacancyList', {
        templateUrl: 'pages/vacancy-list/vacancy-list.template.html',
        controller: 'VacancyListController'
    })
    .controller('VacancyListController', ['VacancyListService',
        function (VacancyListService) {
            var that = this;
            VacancyListService.GetData().then(function (response) {
                that.vacancyList = response;
            });

            that.Respond = function (id) {
                VacancyListService.Respond(id);
            };

        }
    ]);