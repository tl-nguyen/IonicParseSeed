"use strict";

ionicParseSeed
    .controller('AppCtrl', function($scope, $ionicModal, $timeout, User) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.registerData = {};

        $scope.currentUser = User.current();

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.loginModal = modal;

            if (!$scope.currentUser) {
                $scope.loginModal.show();
            }
        });

        $ionicModal.fromTemplateUrl('templates/register.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.registerModal = modal;
        });

        // Perform the login action when the user submits the login form
        $scope.doLogin = function(userData) {
            if (userData.username != "" &&
                userData.password != "") {
                User.logIn(userData.username, userData.password, {
                    success: function(user) {
                        $scope.currentUser = User.current();

                        $scope.loginModal.hide();

                        clearFields(userData);
                    },
                    error: function(user, error) {
                        // The login failed. Check error to see why.
                        alert("Error: " + error.code + " " + error.message);
                    }
                })
            }
        };

        $scope.showRegister = function () {
            $scope.registerModal.show();
        };

        $scope.doRegister = function (userData) {
            var newUser = new User();

            console.log(userData);

            if (userData.username != "" &&
                userData.password != "" &&
                userData.email != "") {

                newUser.setUsername(userData.username);
                newUser.setPassword(userData.password);
                newUser.setEmail(userData.email);

                newUser.signUp(null, {
                    success: function(user) {
                        $scope.currentUser = User.current();

                        $scope.registerModal.hide();
                        $scope.loginModal.hide();

                        clearFields(userData);
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });
            }
        };

        $scope.cancelRegister = function () {
            $scope.registerModal.hide();
        };

        $scope.logout = function () {
            User.logOut();
            $scope.loginModal.show();
        };

        function clearFields(userData) {
            userData.username = "";
            userData.password = "";
            userData.email = "";
        }
    });