(
    function () {
        "use strict";
                
        function _init() {
            var config = {
    apiKey: "AIzaSyBrooer2cnh6eidV_i5ze9i7l32E6QKCu4",
    authDomain: "testing-6aa1e.firebaseapp.com",
    databaseURL: "https://testing-6aa1e.firebaseio.com",
    storageBucket: "testing-6aa1e.appspot.com",
  };

        return firebase.initializeApp(config);
        }
    angular.module("app.auto.firebase").constant("firebase", _init());
        
    })();