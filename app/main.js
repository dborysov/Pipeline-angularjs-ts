(() => {
	'use strict';

	angular.module('app', ['ui.router']).config(/* @ngInject */($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise("/accounts");

		$stateProvider
			.state('index', {
				url: '',
				abstract: true,
				controller: 'Main as vm',
				template: '<ui-view/>'
			})
			.state('index.accounts', {
				url: '/accounts',
				templateUrl: 'partials/accounts-list.html'
			})
			.state('index.details', {
				url: '/accounts/:login',
				templateUrl: 'partials/accounts-details.html',
				controller: 'AccountDetails as vm'
			})
	});
})();