angular.module('Scout.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  
  $stateProvider
  .state('autonomous', {
    url: '/autonomous',
    templateUrl: 'client/templates/autonomous.html',
    controller: 'autonomousCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'client/templates/tabs.html'
  })

  .state('chats', {
    url: '/chats',
        templateUrl: 'client/templates/chats.html'
  })
  
  .state('setup', {
    url: '/setup',
    templateUrl: 'client/templates/setup.html',
    controller: 'setupCtrl'
  })


  .state('cloud', {
    url: '/cloud',
    templateUrl: 'client/templates/cloud.html',
      controller: 'cloudCtrl'

  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'client/templates/tabs.html',
    abstract:true
  })

  .state('teleOp', {
    url: '/teleop',
        templateUrl: 'client/templates/teleOp.html',
        controller: 'teleOpCtrl'

  })

  .state('match', {
    url: '/match',
        templateUrl: 'client/templates/match.html',
        controller: 'matchCtrl'
  })

  .state('pitScouting', {
    url: '/pit',
         templateUrl: 'client/templates/pitScouting.html',
        controller: 'pitScoutingCtrl'
   
  })

  .state('tab7DefaultPage', {
    url: '/page8',
    templateUrl: 'client/templates/tab7DefaultPage.html',
    controller: 'tab7DefaultPageCtrl'
  })

  .state('tabsController.configuration', {
    url: '/configure',
        templateUrl: 'client/templates/configuration.html',
        controller: 'configurationCtrl'
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

  $urlRouterProvider.otherwise('/autonomous');

});