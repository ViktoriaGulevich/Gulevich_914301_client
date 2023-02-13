'use strict';

angular.module('addResume')
    .component('addResume', {
        templateUrl: 'pages/add-resume/add-resume.template.html',
        controller: 'AddResumeController'
    })
    .controller('AddResumeController', ['AddResumeService', '$routeParams', '$location',
        function (AddResumeService, $routeParams, $location) {
            var that = this;

            that.Add = function () {
                AddResumeService.AddData(that.resume).then(function () {
                    $location.path('/home');
                });
            };
        }
    ]);