"use strict";

ionicParseSeed
    .factory("gravatar", function () {

        var get = function (email) {
            return 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(email) + '.jpg?s=200&r=g'
        };

        return {
            get: get
        }
    });