(function () {
        "use strict";

        function config($routeProvider) {

            $routeProvider.when("/add", {
                templateUrl: "add.html",
                controller: "AddController",
                controllerAs: "vm",
                title:"Home"

            }).when("/", {
                templateUrl: "home.html",
                title: "Home",
                controller: "HomeController",
                controllerAs: "vm"
            }).when("/catalog", {
                templateUrl: "catalog.html",
                title:"Catalogue",
                controller:"CatalogController",
                controllerAs:"vm"
            }).
        otherwise('/',
                {
                    templateUrl: "home.html",
                    title: "Home",
                    controller: "HomeController",
                    controllerAs: "vm"

                });
        }
    config.$inject = ["$routeProvider"];



    function run($location){
        //run something if you want i guess
    }

    run.$inject = ["$location"];
    angular.module("app.auto", ["ngRoute",
        "app.auto.add", "app.auto.catalog", "app.auto.firebase", "app.auto.home", "app.auto.service"]).config(config).run(run);

    })();