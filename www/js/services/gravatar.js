"use strict";

ionicParseSeed
    .factory("gravatar", function () {

        var get = function (email, size) {
            return 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(email) + '.jpg?s=' + size + '&r=g'
        };

        var getSmall = function (email) {
            return get(email, 30);
        };

        var getBig = function (email) {
            return get(email, 100);
        };

        var getMedium = function (email) {
            return get(email, 60);
        };

        return {
            getSmall: getSmall,
            getBig: getBig,
            getMedium: getMedium
        }
    });