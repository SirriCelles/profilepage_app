var profilePageApp = angular
                        .module("profileModule", [])
                        .controller("profileController", function ($scope, $location, $anchorScroll) {
                            var images = "assets/images";
                            var title = "Profile Page";

                            $scope.images = images;
                            $scope.title = title;
                            $scope.homePage = "home-page.html";
                            $scope.aboutPage = "about-page.html";
                            $scope.scrollTo = function (pageLocation) {
                                $location.hash(pageLocation);
                                $anchorScroll();
                            };
                        });