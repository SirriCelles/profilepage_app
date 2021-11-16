angular.module('profileModule')
    .controller("authController", function ($scope) {
        $scope.signinPage = "templates/signin.html";
        $scope.signupPage = "templates/signup.html";

        var register = function (data) {
            console.log(data);
        };

        var login = (data) => {
            console.log(data);
        };

        $scope.register = register;
        $scope.login = login;
    });