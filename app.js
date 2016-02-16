var myApp = angular.module('myApp', []);
// Inject services into controllers: $scope, $document, and $rootScope
var element = angular.element(document);

  var keyObj = {
    13: 'Enter',
    16: 'Shift',
    32: 'Space',
    20: 'Caps Lock',
    9: 'Tab',
    8: 'Delete'
  }





myApp.controller('mainController', ['$scope', '$document', '$rootScope', function($scope, $document, $rootScope) {
    
    // Saves the counter
    $scope.count = 0;
    // Saves out the letters
    $scope.key = 'none';
    // Saves the keycode
    $scope.lastKey = '';

    // Increment function
    $scope.increment = function () {
      $scope.count++;      
    };

    $scope.keypress = function ($event) {
      var key = $event.keyCode;
      var string = String.fromCharCode(key);
      $scope.increment();
      if ( keyObj[key] ) {
        $scope.lastKey = keyObj[key];
      } else {
        $scope.lastKey = string;
      }
    };

// angular.elemnt wraps a raw dom element or html string as a jQeruy element.
element.on('keydown', function(event){
  var keys = angular.element(document.getElementsByClassName(event.keyCode));
  //if you have a directive that sets up a DOM event listener and changes some models inside the handler function, you need to call $apply() to ensure the changes take effect.
    $scope.$apply($scope.keypress(event));
  //grab the class name the keyCode class name, then add a class to it.
  keys.addClass('down');
});
element.on('keyup',function(event){
  var keys = angular.element(document.getElementsByClassName(event.keyCode));  
  keys.removeClass('down');
});

    

}]);


























