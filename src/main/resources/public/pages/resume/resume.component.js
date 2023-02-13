'use strict';

angular.module('resume')
    .component('resume', {
        templateUrl: 'pages/resume/resume.template.html',
        controller: 'ResumeController'
    })
    .controller('ResumeController', ['ResumeService', '$rootScope', '$routeParams', '$location', '$route',
        function (ResumeService, $rootScope, $routeParams, $location, $route) {
            var that = this;
            var resumeId = $routeParams.id;

            ResumeService.GetData(resumeId).then(function (response) {
                that.resume = response;
            });

            that.Update = function () {
                ResumeService.UpdateData(that.resume).then(function () {
                    $route.reload();
                }, function (response) {
                    console.log(response);
                    console.log(response.config.data);
                });
            }

            that.Delete = function () {
                ResumeService.Delete(resumeId).then(function () {
                    $location.path('/home');
                });
            }

            that.isUser = function () {
                return $rootScope.role === 'USER';
            }
        }
    ]);