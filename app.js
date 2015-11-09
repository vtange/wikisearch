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
  var generator = "&list=search&srsearch=";
  var utf = "&utf8=";
  var callback = "&callback=JSON_CALLBACK"
    $scope.returns = []
    $scope.searchWiki = function(term){
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
                                                $http.jsonp(baseUrl + query + format + generator + term + callback).success(function(data) {
                                                    // you can do some processing here
                                                     $scope.returns = data;
                                                    console.log($scope.returns);
                                                }).error(function(data) {
                                                    // you can do some processing here
                                                    console.log('error');
                                                });
                                        $scope.wikiThis = "";
    }
}]);//end of controller
  //end of function
})();
