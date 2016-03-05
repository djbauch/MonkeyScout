if (Meteor.isClient) {
	// Runs only on the client
	angular
		.module('Scout', [
			'angular-meteor',
			'ionic',
			'Scout.controllers',
			'Scout.routes',
			'Scout.services',
			'Scout.directives'
			])
//		.config(function ($stateProvider, $urlRouterProvider) {
//			$stateProvider
//				.state('home', {
//					url: '/home',
//					templateUrl: 'client/templates/configuration.html'
//				});
//			$urlRouterProvider.otherwise('/home')
//		})

		.run(function($ionicPlatform) {
			$ionicPlatform.ready(function() {
				if (window.StatusBar) {
					StatusBar.styleDefault();
				}
			});
		
	});
}
//	if (Meteor.isCordova) {
//		angular.element(document).on('deviceready', onReady);
//	} else {
//		angular.element(document).ready(onReady);
//	}
//
//	function onReady() {
//		angular.bootstrap(document, ['Scout']);
//	}
//}