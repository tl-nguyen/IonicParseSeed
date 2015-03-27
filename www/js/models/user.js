"use strict";

ionicParseSeed
    .factory("User", function () {
        Parse.User.extend({
            getUsername: function () {
                return this.get("username");
            },
            setUsername: function (username) {
                this.set("username", username);
            },
            getPassword: function () {
                return this.get("password");
            },
            setPassword: function (password) {
                this.set("password", password);
            },
            getEmail: function () {
                return this.get("email");
            },
            setEmail: function (email) {
                this.set("email", email);
            }
        });

        return Parse.User;
    });