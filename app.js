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



// angular.elemnt wraps a raw dom element or html string as a jQeruy element.
element.on('keydown', function(event){
  var keys = angular.element(document.getElementsByClassName(event.keyCode));
  //grab the class name the keyCode class name, then add a class to it.
  keys.addClass('down');
});
// angular.elemnt wraps a raw dom element or html string as a jQeruy element.
element.on('keyup',function(event){
  var keys = angular.element(document.getElementsByClassName(event.keyCode));
  //grab the class name the keyCode class name, then remove a class from it.
  keys.removeClass('down');
});

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

     

    

}]);


























