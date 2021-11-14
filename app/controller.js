var profilePageApp = angular
                        .module("profileModule", ["ngRoute"])
                        .config(function ($routeProvider, $locationProvider) {
                            $locationProvider.hashPrefix('');
                            $routeProvider
                                .when("/home", {
                                    templateUrl: "view.html",
                                    controller: "profileController"
                                })
                                .when("/signup", {
                                    templateUrl: "templates/signup.html",
                                    controller: "authController"
                                })
                                .when("/signin", {
                                    templateUrl: "templates/signin.html",
                                    controller: "authController"
                                })
                                .otherwise({
                                    redirecTo: "/home"
                                });
                        })
                        .controller("profileController", function ($scope, $location, $anchorScroll) {
                            var images = "assets/images";
                            var title = "Profile Page";

                            $scope.images = images;
                            $scope.homePage = "templates/home-page.html";
                            $scope.aboutPage = "templates/about-page.html";
                            $scope.scrollTo = function (pageLocation) {
                                $location.hash(pageLocation);
                                $anchorScroll();
                            };
                            $scope.autherUser = true;
                        })
                        .controller("authController", function ($scope, $http) {
                            $scope.signinPage = "templates/signin.html";
                            $scope.signupPage = "templates/signup.html";
                            // $scope.signup = function () {
                            //     $http.post("url").then((response) => {
                            //         return response;
                            //     });
                            // };

                            // $scope.signin = function () {
                            //     $http.get("url").then((response) => {
                            //         return response;
                            //     });
                            // }
                        });