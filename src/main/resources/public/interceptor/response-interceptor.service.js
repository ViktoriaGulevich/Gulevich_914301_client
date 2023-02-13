'use strict';

angular.module('responseInterceptor')
    .factory('responseInterceptorService', [
        function () {
            var service = {
                responseError: function (response) {
                    var errorMessageBlock = document.getElementById('errorMessageBlock');
                    var errorMessage = document.getElementById('errorMessage');

                    errorMessageBlock.hidden = false;
                    if (response.data.message){
                        errorMessage.innerHTML = response.data.message;
                    } else {
                        errorMessage.innerHTML = 'Неизвестная ошибка';
                    }

                    setTimeout(function () {
                        errorMessageBlock.hidden = true;
                    }, 5000);
                }
            }

            return service;
        }
    ]);