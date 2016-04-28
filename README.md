![alt tag](http://res.cloudinary.com/dmj8qtant/image/upload/c_limit,w_600/v1454452618/lainicav200larnipqgk.png)
# wikisearch

## Tech
AngularJS + watching an input box

## Niceties
Auto search on text entry.

### Details
#### CSS
 1. CSS Animation based off Ng-class
 2. "x" on text input.

#### JS

 1. Perform a $http search within a search, due to nature of Wikipedia API
 2. Use of $watch to check for any input. Used for yellow search preview box.

  ```
     $scope.$watch(function() { return $scope.wikiThis}, //watch this, NOTE THE COMMA
            function() {   //do this when ^ changes
  ```
  
 3. CSS animation for text-input field based on $scope.searched.

 ```
    -data-ng-class="{'searchr-mid': !searched, 'searchr-up': searched}"
 ```
