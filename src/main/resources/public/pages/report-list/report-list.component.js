'use strict';

angular.module('reportList')
    .component('reportList', {
        templateUrl: 'pages/report-list/report-list.template.html',
        controller: 'ReportListController'
    })
    .controller('ReportListController', ['ReportListService',
        function (ReportListService) {
            var that = this;
            ReportListService.GetData().then(function (response) {
                that.reportList = response;
            });
        }
    ]);