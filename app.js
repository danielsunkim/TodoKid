var myApp = angular.module('myApp', []);


// Custom directive with keypressEvents
// myApp.directive('keypressEvents', function ($document, $rootScope) {
//     return {
//         link: function () {
//             console.log('linked');
//             $document.bind('keypress', function (e) {
//                 $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
//             });
//         }
//     }
// });

// Inject services into controllers: $scope, $document, and $rootScope

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
    }

    //Produces keyCode



    // On rootScope, on keypress, apply this function with, scope.key is the key pressed
    // $rootScope.$on('keypress', function (evt, obj, key) {
    //     $scope.$apply(function () {
    //         $scope.key = key;
    //         $scope.increment();
    //     });
    // });

    $scope.keypress = function ($event) {
      var key = $event.keyCode;
      var string = String.fromCharCode(key);
      $scope.increment();
      // String.fromCharCode($event.keyCode) convert into letter
      if ( keyObj[key] ) {
        $scope.lastKey = keyObj[key];
      } else {
        $scope.lastKey = string;
      }
    }


}]);



























