angular.module('Scout.controllers', [])

.controller('ConfigurationCtrl', function ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);

  // let teamNumber = $stateParams.teamNumber;
  this.helpers({
    teams() {
      return Teams.find({});
    }
    //  thing() { return "Magical"}
  });

  this.teamNumber = 0;
  this.teamName = 0;
  this.addTeam = function () {
    console.log('Add team');
  }
})

.controller('setupCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);

  this.teams = Teams.find({});

  this.addTeam = function () {
    Teams.insert({ number: teamNumber, name: teamName });
  }
})

.controller('autonomousCtrl', function ($scope, $reactive) {
  console.log("Autonomous");
  $scope.clickAt = function (loc) {
    $scope.startPos = loc;
    console.log(loc);
  }

})

.controller('cloudCtrl', function ($scope) {

})

.controller('teleOpCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);
  this.numAttempts = 0;
  this.numScores = 0;

  this.attempt = function () {
    console.log("Attempt " + this.numAttempts)
    this.numAttempts++;
  }
  this.score = function () {
    this.numScores++;
  }
  this.resetScore = function () {
    this.numAttempts = 0;
    this.numScores = 0;
  }
})

.controller('matchCtrl', function ($scope) {

})

.controller('pitScoutingCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);

  this.teams = Teams.find({});
  debugger;
  console.log('Got ' + this.teams + ' teams')
  /* this.teams = [
      {
          _id: 0,
          number: 457,
          name: 'Grease Monkeys'
      },
      {
          _id: 1,
          number: 1477,
          name: 'Texas Torque'
      }
  ]; */
})

.controller('tab7DefaultPageCtrl', function ($scope) {

})

.controller('configurationCtrl', function ($scope) {

})

.controller('loginCtrl', function ($scope) {

})

.controller('signupCtrl', function ($scope) {

})
