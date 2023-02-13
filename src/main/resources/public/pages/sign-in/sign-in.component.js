'use strict';

angular.module('signIn')
    .component('signIn', {
        templateUrl: 'pages/sign-in/sign-in.template.html',
        controller: 'SignInController'
    })
    .controller('SignInController', ['$location', 'SignInService',
        function ($location, SignInService) {
            var that = this;
            this.signIn = function (user) {
                SignInService.SignIn(user.login, user.password).then(
                    function (response) {
                        if (response.status == 200) {
                            SignInService.SetCredentials(user.login, user.password);
                            $location.path('/home');
                        }
                    }
                );
            };
            this.signUp = function () {
                $location.path('/sign-up');
            };
        }
    ]);
