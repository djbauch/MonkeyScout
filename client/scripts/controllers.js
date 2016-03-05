angular.module('Scout.controllers', [])
  
.controller('setupCtrl', function($scope) {
    $scope.teams = Teams.find({});

    $scope.addTeam = function() {
        Teams.insert({ number: teamNumber, name: teamName });
    }
})
   
.controller('autonomousCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
      
.controller('teleOpCtrl', function($scope) {

})
   
.controller('matchCtrl', function($scope) {

})
   
.controller('pitScoutingCtrl', function($scope) {

})
   
.controller('tab7DefaultPageCtrl', function($scope) {

})
   
.controller('configurationCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
 