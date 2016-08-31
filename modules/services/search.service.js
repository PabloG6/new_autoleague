/**
 * Created by Pablo on 8/28/2016.
 */
(
    function(){
        "use strict";
        function SearchService(){
            var vm = this;
            vm.setFilter = setFilter;
            vm.retrieveFilter = retrieveFilter;
            vm.printValue = printValue;


            function setFilter(value){
                vm.value = value;
            }




            function retrieveFilter(){
                return vm.value
            }

            //testing service
            function printValue(){

            }




        }

        angular.module("app.auto.service").service("searchService", SearchService)
    }
)();