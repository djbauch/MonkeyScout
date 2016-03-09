// JavaScript source code
Meteor.startup(function () {
    if (Teams.find().count() !== 0) return;
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
});

