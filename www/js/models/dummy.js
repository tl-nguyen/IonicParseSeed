"use strict";

ionicParseSeed
    .factory("Dummy", function () {
        var Dummy = Parse.Object.extend("Dummy", {
            // Instance methods
            getName: function () {
                return this.get("name");
            },
            setName: function (name) {
                this.set("name", name);
            },
            // Instance properties go in an initialize method
            initialize: function (attrs, options) {

            }
        });

        return Dummy;
    });