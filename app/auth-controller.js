angular.module('profileModule')
    .controller("authController", function ($scope, $location) {
        users = [
            {
                id:1,
                email: 'sirricelles@gmail.com',
                password: 'string'
            },
            {
                id: 2,
                email: 'testuser@gmail.com',
                password: 'string'
            }
        ];
        $scope.signinPage = "templates/signin.html";
        $scope.signupPage = "templates/signup.html";
        var message = {
            status: 'none',
            data: ''
        };

        function findUser(email) {
            // Convert id to a number.
            const matches = users.filter(function(user) {
              return user.email === email;
            });
            const user = matches.shift();
    
            return user;
        }

        function storage(user) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        function loadMessage() {
            $scope.status = message.status;
            $scope.message = message.data;
        }

        var register = function (data) {
            const matchedUser = findUser(data.email);
            var newUser = {
                id: users.length + 1,
                email: data.email,
                password: data.password
            };
            if(matchedUser == null) {
                users.push(newUser);
                const user = {
                    id: matchedUser.id,
                    email: matchedUser.email
                };
                storage(user);
                message = {
                    status: 200,
                    data: "Account created successfully"};
                loadMessage();
            } else {
                message = {
                    status: 404,
                    data: "User already exist"
                };
                loadMessage();
            }
        };

        var login = function(data) {
            const matchedUser = findUser(data.email);
            if(matchedUser === null) {
                message = {
                    status: 405,
                    data: "Email or Password mismatch"};
                loadMessage();
            }
            else {
                if(data.password !== matchedUser.password ) {
                    message = {
                        status: 405,
                        data: "Email or Password mismatch"};
                    loadMessage();
                }else {
                    const user = {
                        id: matchedUser.id,
                        email: matchedUser.email
                    };
                    storage(user);
                    message = {
                        status: 200,
                        data: "Login successfull"};
                    loadMessage();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            }
        };



        $scope.register = register;
        $scope.login = login;
        $scope.status = message.status;

    });
