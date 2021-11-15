//

angular.module('profileModule')
    .controller("authController", ['FBMS', function ($scope, FBMS) {
            $scope.signinPage = "templates/signin.html";
            $scope.signupPage = "templates/signup.html";

            var self = this;
            var ref = new Firebase(FBMS);
            self.signUp = function() {
                ref.createUser({
                    email: self.email,
                    password: self.password
                }), function(error, userData) {
                    if (error) {
                        console.log("Error creating User: ", error);
                    } else {
                        console.log("successfully created user account with uid: ", userData.uid);
                        console.log(userData);
                    }
                }
            }
    }]);