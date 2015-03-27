"use strict";

var ionicParseSeed = angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform, config) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            Parse.initialize(config.APP_ID, config.JAVASCRIPT_ID);
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            }).state('app.home.tab1', {
                url: "/tab1",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tab1.html"
                    }
                }
            }).state('app.home.tab2', {
                url: "/tab2",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tab2.html"
                    }
                }
            }).state('app.home.tab3', {
                url: "/tab3",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tab3.html"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
