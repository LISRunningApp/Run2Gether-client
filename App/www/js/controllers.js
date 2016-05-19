angular.module('app.controllers', [])
        
.controller('loginCtrl', function($scope) {

})
   
.controller('registerCtrl', function($scope) {

})
   
.controller('runTogetherCtrl', function($scope) {

})
   
.controller('inicioCtrl', function($scope) {

})
   
.controller('amigosCtrl', function($scope) {

})
   
.controller('gruposCtrl', function($scope) {

})
   
.controller('historialActividadesCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('resumenActividadCtrl', function($scope) {

})

.controller('addGrupoCtrl', function($scope) {

})

.controller('addAmigoCtrl', function($scope) {

})

.controller('selectAmigosCtrl', function($scope) {

})

.controller('runningCtrl', function($scope) {

})

.controller('cronometroCtrl', function($scope) {

})

.controller('timerCtrl', function($scope, $timeout) {
  var zero = '0'; 
  $scope.myTimer = zero+0;
  $scope.mySeconds = zero+0;
  $scope.myMinutes = zero+0;
  $scope.myHours = zero+0;
  var myTimerVariable;
  var enmarcha=0;
  $scope.myCustomTimer = function() {
    $scope.myTimer++;
    if ($scope.myTimer <10){
          $scope.myTimer = zero+$scope.myTimer;
      }
    //$scope.myTimer = 0;
    if ($scope.myTimer == 60){
      $scope.mySeconds++;
      if ($scope.mySeconds <10){
          $scope.mySeconds = zero+$scope.mySeconds;
      }
      $scope.myTimer = zero+0;
    }
    if ($scope.mySeconds == 60){
      $scope.myMinutes++;
      $scope.speakText('Animo, llevas'+$scope.myMinutes+'minutos');
      if ($scope.myMinutes <10){
          $scope.myMinutes = zero+$scope.myMinutes;
      }

      $scope.mySeconds = zero+0;
    }
    if ($scope.myMinutes == 60){
      $scope.myHours++;
      if ($scope.myHours <10){
          $scope.myHours = zero+$scope.myHours;
      }
      $scope.myMinutes = zero+0;
    }

    myTimerVariable = $timeout($scope.myCustomTimer, 15)
  }


  $scope.start = function() {
    if(enmarcha == 0){
      myTimerVariable = $timeout($scope.myCustomTimer(), 15);
      enmarcha=1;
    }
    

  }
  $scope.stop = function() {
    $timeout.cancel(myTimerVariable);
    enmarcha=0;
  }
  $scope.reset = function() {
    $scope.myTimer = zero+0;
    $scope.mySeconds = zero+0;
    $scope.myMinutes = zero+0;
    $scope.myHours = zero+0;
  }

  $scope.speakText = function($txt) {
    TTS.speak({
           text: $txt,
           locale: 'es-ES',
           rate: 1.5
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };

});
 