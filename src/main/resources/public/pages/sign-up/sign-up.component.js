'use strict';

angular.module('signUp')
    .component('signUp', {
        templateUrl: 'pages/sign-up/sign-up.template.html',
        controller: 'SignUpController'
    })
    .controller('SignUpController', ['$location', 'SignUpService', '$route',
        function ($location, SignUpService, $route) {
            this.signUp = function (user) {
                SignUpService.SignUp(user).then(
                    function () {
                        $location.path('/sign-in');
                    },
                    function () {
                        $route.reload();
                    }
                );
            };
        }
    ]);
