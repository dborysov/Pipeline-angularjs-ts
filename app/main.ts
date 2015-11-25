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
                templateProvider: /* @ngInject */ $templateCache => $templateCache.get('/accounts-list.html')
            })
            .state('index.details', {
                url: '/accounts/:login',
                templateProvider: /* @ngInject */ $templateCache => $templateCache.get('/accounts-details.html'),
                controller: 'AccountDetails',
                controllerAs: 'vm'
            })
    }
}

angular.module('app', ['ui.router']).config(Config);
