angular.module('Scout.controllers', [])
  
.controller('setupCtrl', function($scope) {
    $scope.teams = Teams.find({});

    $scope.addTeam = function() {
        Teams.insert({ number: teamNumber, name: teamName });
    }
})
   
.controller('autonomousCtrl', function ($scope) {
    console.log("Autonomous");
    $scope.clickAt = function (loc) {
        $scope.startPos = loc;
        console.log(loc);
    }

})
   
.controller('cloudCtrl', function($scope) {

})
      
.controller('teleOpCtrl', function ($scope) {
    $scope.numAttempts = 0;
    $scope.numScores = 0;

    $scope.attempt = function () {
        console.log("Attempt " + $scope.numAttempts)
        $scope.numAttempts++;
    }
    $scope.score = function () {
        $scope.numScores++;
    }
    $scope.resetScore = function () {
        $scope.numAttempts = 0;
        $scope.numScores = 0;
    }
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
 