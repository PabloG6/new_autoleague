(function () {
    "use strict";
    angular.module('app.auto.add').controller("AddController", Controller);
       Controller.$inject = ["firebaseController", "$location", "searchService"];


    function Controller(firebase, $location, searchService){
        //push information to firebase
        var vm = this;


        vm.product = {};
        vm.submit = function (){
            
            var reference = firebase.database().ref("products");
        
            var storage = firebase.storage().ref();
            
            var storageReference = storage.child("product_images");
            
            
            var key = reference.push(vm.product);
            $location.path("/catalog")
            
            
           

        };

        function searchFunction(searchValue){
            //search function should lead to

            searchService.setFilter(searchValue);
            $location.path("/catalog");


    }


        vm.searchFunction = searchFunction;
        
        
        
    }

    
 
}
 

)();