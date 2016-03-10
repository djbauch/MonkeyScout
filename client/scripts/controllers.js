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
    Matches.insert({
      number: +this.matchNumber,
      red: [+this.red1, +this.red2, +this.red3],
      blue: [+this.blue1, +this.blue2, +this.blue3]
    });
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
    },
    matches() {
      return Matches.find({});
    }
  });

  this.clickAt = function (loc) {
    this.startPos = loc;
    console.log(loc);
  }

  this.publish = function () {
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

  this.helpers({
    teleOpcoutingInfo() {
      return TeleOpScoutingInfo.find({ match: +this.mathchNum, team: +this.teamNum });
    },
    teams() {
      return Teams.find({});
    },
    matches() {
      return Matches.find({});
    }
  });

  this.toggleButton = function () {
    this.direction = -this.direction;
    if (this.direction > 0) {
      this.symbol = "glyphicon-plus";
      this.color = "button-balanced"
    } else {
      this.symbol = "glyphicon-minus";
      this.color = "button-assertive";
    }
  }

  this.attempt = function () {
    console.log("Attempt " + this.numAttempts)
    this.numAttempts += this.direction;
  }

  this.score = function () {
    this.numScores += this.direction;
  }

  this.resetScore = function () {
    this.numAttempts = 0;
    this.numScores = 0;
  }

  this.publish = function () {
    let record = TeleOpScoutingInfo.findOne({ match: +this.matchNum, team: +this.teamNum });
    if (record) {
      TeleOpScoutingInfo.remove({ _id: record._id });
    }
    TeleOpScoutingInfo.insert({
      match: +this.matchNum, team: +this.teamNum,
      crossed: false || this.crossed,
      breached: false || this.breached,
      crossedDefense: this.crossedDefense,
      breachedDefense: this.breachedDefense,
      numAttempts: +this.numAttempts,
      numScores: +this.numScores,
      towerChallenged: false || this.towerChallenged,
      towerScaled: false || this.towerScaled
    });
  }

  this.selectionChanged = function () {

  }
  this.matchNum = 0;
  this.teamNum = 0;
  this.startPos = 'Unspecified';
  this.breached = false;
  this.breachedDefense = 'Unspecified';
  this.crossedDefense = 'Unspecified';
  this.crossed = false;
  this.numAttempts = 0;
  this.numScores = 0;
  this.towerChallenged = false;
  this.towerScaled = false;

  this.direction = 1;
  this.symbol = "glyphicon-plus";
  this.color = "button-balanced";
})

.controller('MatchCtrl', function ($scope) {

})

.controller('PitScoutingCtrl', function ($scope, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    teams() {
      return Teams.find({});
    }
  });

  this.publish = function () {
    let record = TeleOpScoutingInfo.findOne({ match: +this.matchNum, team: +this.teamNum });
    if (record) {
      TeleOpScoutingInfo.remove({ _id: record._id });
    }

    PitScoutingInfo.insert({
      team: +this.teamNum,
      wheels: this.wheels,
      wheelType: this.wheelType,
      code: this.code,
      scaling: this.scaling,
      intake: this.intake
    });
  }
  
  this.teamChanged = function () {
    if (this.selectedTeam != null) {
      this.teamNum = this.selectedTeam.number;
      let record = PitScoutingInfo.findOne({ team: +this.selectedTeam.number })
      if (record ) {
         this.wheels = record.wheels;
        this.wheelType = record.wheelType;
        this.code = record.code;
        this.scaling = record.scaling;
        this.intake = record.intake;
      } else {
        this.wheels = 0;
        this.wheelType = '';
        this.code = '';
        this.scaling = '';
        this.intake = '';
      }
    }
  }
  
  this.teamNum = 0;
  this.selectedTeam = {};
  this.wheels = 0;
  this.wheelType = 'pneumatic';
  this.code = 'Java';
  this.scaling = '';
  this.intake = '';
})

.controller('tab7DefaultPageCtrl', function ($scope) {

})

.controller('configurationCtrl', function ($scope) {

})

.controller('loginCtrl', function ($scope) {

})

.controller('signupCtrl', function ($scope) {

})
