angular.module('Scout.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js


    $stateProvider

  .state('tabs', {
      url: '/tabs',
      templateUrl: 'client/templates/tabs.html',
      abstract: true
  })

  .state('tabs.autonomous', {
      url: '/autonomous',
      views: {
          'tab-autonomous': {
              templateUrl: 'client/templates/autonomous.html',
              controller: 'autonomousCtrl'
          }
      }
  })

  .state('tabs.chats', {
      url: '/chats',
      templateUrl: 'client/templates/chats.html'
  })

  .state('tabs.setup', {
      url: '/setup',
      views: {
          'tab-setup': {
              templateUrl: 'client/templates/setup.html',
              controller: 'setupCtrl'
          }
      }
  })


  .state('tabs.cloud', {
      url: '/cloud',
      views: {
          'tab-cloud': {
              templateUrl: 'client/templates/cloud.html',
              controller: 'cloudCtrl'
          }
      }
  })


  .state('tabs.teleop', {
      url: '/teleop',
      views: {
          'tab-teleop': {
              templateUrl: 'client/templates/teleOp.html',
              controller: 'teleOpCtrl'
          }
      }
  })

  .state('tabs.match', {
      url: '/match',
      views: {
          'tab-match': {
              templateUrl: 'client/templates/match.html',
              controller: 'matchCtrl'
          }
      }
  })

  .state('tabs.pit', {
      url: '/pit',
      views: {
          'tab-pit': {
              templateUrl: 'client/templates/pitScouting.html',
              controller: 'pitScoutingCtrl'
          }
      }
  })

  .state('tab7DefaultPage', {
      url: '/page8',
      templateUrl: 'client/templates/tab7DefaultPage.html',
      controller: 'tab7DefaultPageCtrl'
  })

  .state('tabs.configure', {
      url: '/configure',
      views: {
          'tab-configure': {
              templateUrl: 'client/templates/configuration.html',
              controller: 'configurationCtrl'
          }
      }
  })

  .state('login', {
      url: '/page10',
      templateUrl: 'client/templates/login.html',
      controller: 'loginCtrl'
  })

  .state('signup', {
      url: '/page11',
      templateUrl: 'client/templates/signup.html',
      controller: 'signupCtrl'
  });

    $urlRouterProvider.otherwise('/tabs/setup');

});