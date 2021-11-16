/// <reference path="angular.js">

var profilePageApp = angular
                        .module("profileModule", ["ngRoute"])
                        .config(function ($routeProvider, $locationProvider) {
                            var authUser =  function () {
                                if(localStorage.getItem('user') !== null) {
                                    console.log(localStorage.getItem('user'));
                                    return true;
                                } else {return false;}
                            };
                            $locationProvider.hashPrefix('');
                            $routeProvider
                                .when("/home", {
                                    templateUrl: "view.html",
                                    controller: "profileController"
                                })
                                .when("/", {
                                    templateUrl: "templates/signin.html",
                                    controller: "authController"
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
                                    redirecTo: authUser ? "/home" : "/signin"
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
                            $scope.title = title;
                        });
