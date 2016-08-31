(
    function(){
    "use strict";
        
        function CatalogController(firebase, $firebaseObject, searchService){

            var vm = this;
            var reference = firebase.database().ref("products");
            var products = $firebaseObject(reference);
            vm.data = [];
            vm.searchInfo = searchService.retrieveFilter();
            reference.once("value", function(snapshot){
                console.log("hi");
                var data = snapshot.val();
                getSales(snapshot.val())
            });


            function getSales(snapshot) {

                for (var key in snapshot) {
                    console.log(key);
                    var i = 0;
                    if (key.indexOf("-") !== -1) {

                        var dict = snapshot[key];
                        vm.data.push(dict);
                        console.log(vm.data);
                        console.log(typeof vm.data[i]);

                        i++;
                    }
                }
            }
            function searchFunction(value){
                //search function should lead to
            }
            vm.searchFunction = searchFunction;
        }
        
        CatalogController.$inject = ["firebaseController", "$firebaseObject", "searchService"];
        
    angular.module("app.auto.catalog").controller("CatalogController", CatalogController);
    })();
