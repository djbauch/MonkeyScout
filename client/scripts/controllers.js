angular.module('Scout.controllers', [])

.controller('ConfigurationCtrl', function ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);

  // let teamNumber = $stateParams.teamNumber;
  this.helpers({
    teams() {
      return Teams.find({});
    },
    thing() { return "Magical"; },
  });

  this.addTeam = function () {
    console.log('Add team!');
    Teams.insert({ number: this.teamNumber, name: this.teamName });
  }

  this.clickOnTeam = function (num) {
    console.log('Clicked on ' + num);
    let record = Teams.findOne({ number: num });
    if (record) {
      Teams.remove({ _id: record._id });
    }
  }
  this.teamNumber = 0;
  this.teamName = "";

})

.controller('SetupCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    teams() {
      return Teams.find({});
    },
    matches() {
      return Matches.find({});
    }
  });

  this.addMatch = function () {
 //   Matches.insert({
 //     number: +this.matchNumber,
 //     red: [+this.red1, +this.red2, +this.red3],
 //     blue: [+this.blue1, +this.blue2, +this.blue3]
//    });
  }
 
  this.clickOnMatch = function (num) {
    let record = Matches.findOne({ number: num });
    if (record) {
      Matches.remove({ _id: record._id }); 
    }
  }
  this.matchNumber = 0;
})

.controller('AutonomousCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    autonomousScoutingInfo() {
      return AutonomousScoutingInfo.find({ match: +this.mathchNum, team: +this.teamNum });
    },
    teams() {
      return Teams.find({});
    }
  });

  this.clickAt = function (loc) {
    this.startPos = loc;
    console.log(loc);
  }

  this.publish = function () {
    debugger;
    let record = AutonomousScoutingInfo.findOne({ match: +this.matchNum, team: +this.teamNum });
    if (record) {
      AutonomousScoutingInfo.remove({ _id: record._id });
    } 
    AutonomousScoutingInfo.insert({
      match: +this.matchNum, team: +this.teamNum,
      reachDefense: this.reachDefense || false,
      crossDefense: this.crossDefense || false,
      highGoal: +this.highGoal,
      lowGoal: +this.lowGoal,
      startPos: this.startPos
    });
    
  }
  this.matchNum = 0;
  this.teamNum = 0;
  this.startPos = 'Unspecified';
  this.reachDefense = false;
  this.crossDefense = false;
  this.highGoal = 0;
  this.lowGoal = 0;
})

.controller('CloudCtrl', function ($scope) {

})

.controller('TeleOpCtrl', function ($scope, $reactive) {
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

.controller('MatchCtrl', function ($scope) {

})

.controller('PitScoutingCtrl', function ($scope, $reactive) {
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
