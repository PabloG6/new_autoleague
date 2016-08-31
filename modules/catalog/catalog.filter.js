/**
 * Created by Pablo on 8/28/2016.
 */
(
    function(){
        "use strict";
        console.log("run block of code");
        function CatalogFilter(){

            function search(input){

                var filtered = [];
                function iterator(object, manufacturer, model, year_bottom, year_top, price_bottom, price_top, mileage, isNew){

                        //iterate through items
                        if(object.model==model&&object.manufacturer==
                            manufacturer&&object.year>=year_bottom &&object.year<=year_top && object.price<=price_top&&object.price>=price_bottom
                            &&object.mileage==mileage&&object.isNew==isNew){
                            filtered.push(object);


                        } else {

                        }

                    return filtered;
                }

                angular.forEach(input, iterator)

            }

            return search
        }        angular.module("app.auto.catalog").filter("catalog", CatalogFilter)
    }

)();