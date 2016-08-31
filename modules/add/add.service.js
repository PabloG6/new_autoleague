(
    function(){
        "use strict";
        angular.module("app.auto.add").service("fileUpload", FileUploadService)
        
       
        
        function FileUploadService( ){
            var file_reader = new FileReader();
            console.log('called');
        }
    }
)