'use strict';

angular.module('resumeList')
    .component('resumeList', {
        templateUrl: 'pages/resume-list/resume-list.template.html',
        controller: 'ResumeListController'
    })
    .controller('ResumeListController', ['ResumeListService',
        function (ResumeListService) {
            var that = this;

            ResumeListService.GetData().then(function (response) {
                that.resumeList = response;
            });

            that.Add = function (id) {
                ResumeListService.Add(id);
            };

            that.Find = function () {
                ResumeListService.Find(that.filter).then(function (response) {
                    that.resumeList = response;
                });
            };
        }
    ]);