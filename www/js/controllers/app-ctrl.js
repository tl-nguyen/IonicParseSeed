"use strict";

ionicParseSeed
    .controller('AppCtrl', function ($rootScope, $scope, $window, $ionicModal, popup, loading, modal, gravatar, User) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.registerData = {};

        $rootScope.currentUser = User.current();

        // Create the login modal that we will use later
        modal.showLogin($scope, function (modal) {
            $scope.loginModal = modal;

            if (!$rootScope.currentUser) {
                $scope.loginModal.show();
            }
        });

        modal.showRegister($scope, function (modal) {
            $scope.registerModal = modal;
        });

        // Perform the login action when the user submits the login form
        $scope.doLogin = function (userData) {
            loading.show();
            User.logIn(userData.username, userData.password, {
                success: function (user) {
                    reload();
                },
                error: function (user, error) {
                    loading.hide();
                    popup.errorAlert(error.message);
                }
            })
        };

        $scope.showRegister = function () {
            $scope.registerModal.show();
        };

        $scope.doRegister = function (userData) {
            var newUser = new User();

            newUser.setUsername(userData.username);
            newUser.setPassword(userData.password);
            newUser.setEmail(userData.email);

            loading.show();
            newUser.signUp(null, {
                success: function (user) {
                    reload();
                },
                error: function (user, error) {
                    loading.hide();
                    popup.errorAlert(error.message);
                }
            });
        };

        $scope.cancelRegister = function () {
            $scope.registerModal.hide();
        };

        $scope.logout = function () {
            User.logOut();
            $scope.loginModal.show();
        };

        $scope.getGravatarUrl = function () {
              return gravatar.getBig($rootScope.currentUser.getEmail());
        };

        function reload() {
            $window.location.reload(true)
        }
    });