"use strict";

ionicParseSeed
    .factory("User", function () {
        var User = Parse.User;

        User.prototype.setUsername = function (username) {
            this.set("username", username);
        };

        User.prototype.getUsername = function () {
            this.get("username");
        };

        User.prototype.setPassword = function (password) {
            this.set("password", password);
        };

        User.prototype.getPassword = function () {
            this.get("password");
        };

        User.prototype.setEmail = function (email) {
            this.set("email", email);
        };

        User.prototype.getEmail = function () {
            this.get("email");
        };

        return User;
    });