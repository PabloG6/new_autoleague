/**
 * Created by Pablo on 9/4/2016.
 */
(function(){
    "use strict";
    function TestController($scope) {
        var vm = this;
        console.log(vm.Form);


        console.log($scope.first_name);

        $scope.$watch("first_name", function(new_value){
            console.log(new_value);
            console.log($scope.Form);
        });

        $scope.submitForm = function(isValid) {
            console.log(isValid);
            console.log(vm.first_name);
            console.log($scope.Form);
            console.log(vm.Form, "form as vm")

        }


    }

    TestController.$inject = ["$scope"];

    angular.module("app.auto.test").controller("TestController", TestController)

})();

// var validationApp = angular.module('validationApp', []);

// create angular controller
// validationApp.controller('mainController', function($scope) {
//
//     // function to submit the form after all validation has occurred
//     console.log($scope.userForm.$valid)
//     $scope.submitForm = function(isValid) {
//
//         // check to make sure the form is completely valid
//         if (isValid) {
//             alert('our form is amazing');
//         }
//
//     };
//
// });