module app {
    'use strict';

    class Config {
        
        /* @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $urlRouterProvider.otherwise('/accounts');

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
        }
    }

    angular.module('app', ['ui.router']).config(Config);
}