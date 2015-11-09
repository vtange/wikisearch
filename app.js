(function() {
    //start of function
  var app = angular.module('WikiSearch', []);

app.factory('memory', function(){

  var storage = {};
  storage.datadata = [];
  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.searched = false;
  $scope.homeUrl = "https://en.wikipedia.org/?curid=";
  var baseUrl = "https://en.wikipedia.org/w/api.php";
  var query = "?action=query&list=search";
  var format = "&format=json";
  var keyworder = "&srsearch=";
  var whatToGet = "&prop=extracts&exintro=&explaintext=";
  var utf = "&utf8=";
  var callback = "&callback=JSON_CALLBACK"
    $scope.returns = []
    $scope.searchWiki = function(term){
                                                $scope.returns = []//reset results
                                                $scope.searched = true;
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
                                                $http.jsonp(baseUrl + query + format + keyworder + term + callback).success(function(data1) {
                                                    for(var i=0; i<data1.query.search.length;i++){
                                                         $http.jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&exsentences=1&titles=" + data1.query.search[i].title + callback).success(function(data2) {
                                                             $scope.returns.push(data2.query.pages[Object.keys(data2.query.pages)[0]]);//first and only object in object.
                                                            console.log($scope.returns);
                                                        }).error(function(data2) {
                                                            // you can do some processing here
                                                            console.log('error2');
                                                        });
                                                    }
                                                }).error(function(data1) {
                                                    // you can do some processing here
                                                    console.log('error');
                                                });
    }
}]);//end of controller
  //end of function
})();
