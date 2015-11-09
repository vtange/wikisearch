(function() {
    //start of function
  var app = angular.module('WikiSearch', []);

app.factory('memory', function($http){

  var baseUrl = "https://en.wikipedia.org/w/api.php";
  var query = "?action=query";
  var format = "&format=json";
  var title = "&titles=";
  var callback = "&callback=JSON_CALLBACK"
  var storage = {};
  storage.datadata = [];
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
                                                $http.jsonp(baseUrl + query + format + title + "san francisco" + callback).success(function(data) {
                                                    // you can do some processing here
                                                     storage.datadata = data;
                                                    console.log(storage.datadata);
                                                }).error(function(data) {
                                                    // you can do some processing here
                                                    console.log('error');
                                                });

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service

}]);//end of controller
  //end of function
})();
