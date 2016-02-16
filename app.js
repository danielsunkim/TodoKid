var myApp = angular.module('myApp', []);


// Custom directive with keypressEvents
myApp.directive('keypressEvents', function ($document, $rootScope) {
    return {
        link: function () {
            console.log('linked');
            $document.bind('keypress', function (e) {
                $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
            });
        }
    }
});

// Inject services into controllers
myApp.controller('mainController', ['$scope', '$document', '$rootScope', function($scope, $document, $rootScope) {
    
    $scope.count = 0;
    $scope.key = 'none';

    // Increment function
    $scope.increment = function () {
      $scope.count++;      
    }


    // On rootScope, on keypress, apply this function with, scope.key is the key pressed
    $rootScope.$on('keypress', function (evt, obj, key) {
        $scope.$apply(function () {
            $scope.key = key;
            $scope.increment();
            console.log(key)
        });
    });




}]);
