(function() {

    angular
        .module('profilePageApp')
        .factory("authService", authService);

    authService.$inject = [$firebaseAuth, firebaseDataService, cityTimerService];

    function authService($firebaseAuth, firebaseDataService) {
        var firebaseAuthObject = $firebaseAuth();

        var service = {
            firebaseAuthObject: firebaseAuthObject,
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            sendWelcomeEmail: sendWelcomeEmail
        };

        return service;

        // registering functions
        function register(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        }

        function login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        }

        function logout() {
            // cityTimerService.reset();
            firebaseAuthObject.$signOut();
        }

        function isLoggedIn() {
            return firebaseAuthObject.$getAuth();
        }

        function sendWelcomeEmail(emailAddress)  {
            firebaseAuthObject.emails.push({
                emailAddress: emailAddress
            });
        }
    }
})();
