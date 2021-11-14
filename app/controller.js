var profilePageApp = angular
                        .module("profileModule", [])
                        .controller("profileController", function ($scope) {
                            var images = "assets/images";
                            var title = "Profile Page";

                            $scope.images = images;
                            $scope.title = title;
                            
                        });