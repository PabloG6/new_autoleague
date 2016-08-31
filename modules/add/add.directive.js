(

    function(){
        "use strict";
        angular.module("app.auto.add").directive("fileModel", FileDirective);
        
         function FileDirective(){
             
             function MyFileController(){
                 var vm = this;
                 console.log("called");
                 console.log(vm.myFile)
             }
            return {
            restrict: "A",
            scope:{
            myFile:"="
            },
            controller: MyFileController,
            controllerAs: "vm"
        
    }
            
    }
    }

)();