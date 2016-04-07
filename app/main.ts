class Config {

    /* @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/accounts');

        $stateProvider
            .state('index', {
                abstract: true,
                controller: 'Main',
                controllerAs: 'vm',
                template: '<ui-view/>',
                url: '',
            })
            .state('index.accounts', {
                templateProvider: /* @ngInject */ ($templateCache: ng.ITemplateCacheService) => $templateCache.get('/accounts-list.html'),
                url: '/accounts',
            })
            .state('index.details', {
                controller: 'AccountDetails',
                controllerAs: 'vm',
                templateProvider: /* @ngInject */ ($templateCache: ng.ITemplateCacheService) => $templateCache.get('/accounts-details.html'),
                url: '/accounts/:login',
            });
    }
}

angular.module('app', ['ui.router']).config(Config);
