"use strict";

ionicParseSeed
    .factory("modal", function ($ionicModal) {
        var show = function (templateUrl, scopeRef, callback) {
            var modal = $ionicModal.fromTemplateUrl(templateUrl, {
                scope: scopeRef
            });

            if (callback) {
                modal.then(callback);
            }

            return modal;
        };

        var showLogin = function(scopeRef, callback) {
            return show('templates/login.html', scopeRef, callback);
        };

        var showRegister = function(scopeRef, callback) {
            return show('templates/register.html', scopeRef, callback);
        };

        return {
            showLogin: showLogin,
            showRegister: showRegister
        }
    });