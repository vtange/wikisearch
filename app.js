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
    $scope.returns = []//search results to ng-repeat
    $scope.searchWiki = function(term){//THE SEARCH FUNCTION
                                                $scope.returns = []//reset results to push onto
                                                $scope.searched = true;//bar float up
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";//header for API
                                                $http.jsonp(baseUrl + query + format + keyworder + term + callback).success(function(data1) {//search for keyword, then use results to individually search for similar pages
                                                    for(var i=0; i<data1.query.search.length;i++){
                                                         $http.jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&exsentences=1&titles=" + data1.query.search[i].title + callback).success(function(data2) {
                                                             $scope.returns.push(data2.query.pages[Object.keys(data2.query.pages)[0]]);//first and only object in object.
                                                            console.log($scope.returns);
                                                        }).error(function(data2) {
                                                            // error with 2nd pass
                                                            console.log('error2');
                                                        });
                                                    }
                                                }).error(function(data1) {
                                                    // error with 1st pass
                                                    console.log('error');
                                                });
    }
    $scope.glance = [];//preview results to ng-repeat
    $scope.$watch(function() { return $scope.wikiThis},//watch this
              function() {//do this when ^ changes
                                                $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
                                                $http.jsonp(baseUrl + query + format + keyworder + $scope.wikiThis + callback).success(function(data1) {//grab object for title
                                                        $scope.glance = data1;
                                                        }).error(function(data1) {
                                                    // you can do some processing here
                                                    console.log('error');
                                                });
        });
    $scope.clear = function(){
        $scope.searched = false;//reverts bar to middle
        $scope.wikiThis = "";//clear search text
    }
}]);//end of controller
  //end of function
})();
