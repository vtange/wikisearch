# wikisearch

# Takeaways

 1. Search within a search, due to nature of Wikipedia API
 2. Use of $watch to check for any input. Used for yellow search preview box.
  ```
     $scope.$watch(function() { return $scope.wikiThis}, //watch this, NOTE THE COMMA
            function() {   //do this when ^ changes
  ```
 3. CSS animation for text-input field based on $scope.searched.
 ```
    -data-ng-class="{'searchr-mid': !searched, 'searchr-up': searched}"
 ```
