var LoginFactory = function ($http, $q) {
    return function (emailaddress, password, rememberme) {

        var defferredObject = $q.defer();

        $http.post('/account/login', {
            email: emailaddress,
            password: password,
            rememberme: rememberme
        }).success(function (data) {
            if (data == "true") {
                defferredObject.resolve({ success: true });
            } else {
                defferredObject.resolve({ success: false });
            }
        }).error(function () {
            defferredObject.resolve({ success: false });
        });

        return defferredObject.promise;
    }
}
LoginFactory.$inject = ['$http', '$q'];