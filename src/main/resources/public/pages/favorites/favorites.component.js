'use strict';

angular.module('favorites')
    .component('favorites', {
        templateUrl: 'pages/favorites/favorites.template.html',
        controller: 'FavoritesController'
    })
    .controller('FavoritesController', ['FavoritesService', '$route',
        function (FavoritesService, $route) {
            var that = this;

            FavoritesService.GetData().then(function (response) {
                that.resumeList = response;
            });

            that.Add = function (id) {
                FavoritesService.Add(id).then(function () {
                    $route.reload();
                });
            };

            that.Delete = function (id) {
                FavoritesService.Delete(id).then(function () {
                    $route.reload();
                });
            };
        }
    ]);