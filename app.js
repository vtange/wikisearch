(function() {
    //start of function
  var app = angular.module('WikiSearch', []);

app.factory('memory', function(){

  var storage = {};
  storage.datadata = [];
  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

  var baseUrl = "https://en.wikipedia.org/w/api.php";
  var query = "?action=query";
  var format = "&format=json";
  var title = "&titles=";
  var callback = "&callback=JSON_CALLBACK"

    $scope.searchWiki = function(term){
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
                                                $http.jsonp(baseUrl + query + format + title + "san francisco" + callback).success(function(data) {
                                                    // you can do some processing here
                                                     storage.datadata = data;
                                                    console.log(storage.datadata);
                                                }).error(function(data) {
                                                    // you can do some processing here
                                                    console.log('error');
                                                });
    }
}]);//end of controller
  //end of function
})();
