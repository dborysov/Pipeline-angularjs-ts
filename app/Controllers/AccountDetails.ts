module app.controllers {
    'use strict';

    import IGitService = app.services.IGitService;
    import GitAccount = app.services.GitAccount;

    class AccountDetails{
        private account: GitAccount;

        /* @ngInject */
        constructor($stateParams: ng.ui.IStateParamsService, gitService: IGitService){
            gitService.getGitAccount($stateParams['login'])
                      .then(a => this.account = a);
        }
    }

    angular.module('app')
           .controller('AccountDetails', AccountDetails);
}