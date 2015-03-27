"use strict";

ionicParseSeed
    .factory("loading", function ($ionicLoading) {
        var show = function () {
            $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        var hide = function () {
            $ionicLoading.hide();
        };

        return {
            show: show,
            hide: hide
        }
    });