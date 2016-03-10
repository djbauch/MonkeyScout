// Server Bootstrap JavaScript
Meteor.startup(function () {
  if (Teams.find().count() === 0) {
    Teams.remove({});

    let teams = [
      {
        number: 457,
        name: 'Grease Monkeys',
        // timestamp: moment().subtract(1, 'hours').toDate()
      },
      {
        number: 118,
        // timestamp: moment().subtract(2, 'hours').toDate()
      },
      {
        number: 1477,
        name: 'Texas Torque',
        //  timestamp: moment().subtract(1, 'days').toDate()
      },
      {
        number: 2468,
        name: 'Appreciate',
        // timestamp: moment().subtract(4, 'days').toDate()
      }
    ];

    teams.forEach((t) => {
      Teams.insert(t);
    });
  }

  if (Matches.find().count() === 0) {
    Matches.remove({});

    let matches = [
      {
        number: 1,
        red: [457, 118, 1477],
        blue: [1, 2, 3]
      },
      {
        number: 2,
        red: [2468, 457, 234],
        blue: [7, 8, 9]
      },
      {
        number: 3,
        red: [7, 17, 27],
        blue: [8, 10, 12]
      }
    ];

    matches.forEach((t) => {
      Matches.insert(t);
    });
  }
});

