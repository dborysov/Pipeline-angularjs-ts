/// <reference path="../typings/angularjs/angular" />
/// <reference path="../typings/angular-ui-router/angular-ui-router" />

class Config {

    /* @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/accounts');

        $stateProvider
            .state('index', {
                url: '',
                abstract: true,
                controller: 'Main',
                controllerAs: 'vm',
                template: '<ui-view/>'
            })
            .state('index.accounts', {
                url: '/accounts',
                templateUrl: 'partials/accounts-list.html'
            })
            .state('index.details', {
                url: '/accounts/:login',
                templateUrl: 'partials/accounts-details.html',
                controller: 'AccountDetails',
                controllerAs: 'vm'
            })
    }
}

angular.module('app', ['ui.router']).config(Config);
