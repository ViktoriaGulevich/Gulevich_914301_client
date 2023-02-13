'use strict';

angular.module('toSend')
    .component('toSend', {
        templateUrl: 'pages/to-send/to-send.template.html',
        controller: 'ToSendController'
    })
    .controller('ToSendController', ['ToSendService', '$route',
        function (ToSendService, $route) {
            var that = this;

            ToSendService.GetData().then(function (response) {
                that.resumeList = response;
            });

            this.Delete = function (id) {
                ToSendService.Delete(id).then(function () {
                    $route.reload();
                });
            };

            this.sendText = function () {
                ToSendService.Send(that.description).then(function () {
                    $route.reload();
                });
            }
        }
    ]);