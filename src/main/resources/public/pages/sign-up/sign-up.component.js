'use strict';

angular.module('signUp')
    .component('signUp', {
        templateUrl: 'pages/sign-up/sign-up.template.html',
        controller: 'SignUpController'
    })
    .controller('SignUpController', ['$location', 'SignUpService', '$route',
        function ($location, SignUpService, $route) {
            var that = this;
            this.signUp = function () {
                SignUpService.SignUp(that.user);
            };
            this.confirmCode = function () {
                console.log(that.user)
                SignUpService.Confirm(that.code,that.user).then(
                    function () {
                        $location.path('/sign-in');
                    },
                    function () {
                        $route.reload();
                    }
                );
            }
        }
    ]);
