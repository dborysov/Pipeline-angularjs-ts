module app.controllers {
    'use strict';

    import IGitService = app.services.IGitService;
    import GitAccount = app.models.GitAccount;

    class AccountDetails{
        private account: GitAccount;

        /* @ngInject */
        constructor($stateParams: ng.ui.IStateParamsService, gitService: IGitService){
            gitService.getGitAccount($stateParams['login'])
                      .then((a: GitAccount) => this.account = a);
        }
    }

    angular.module('app')
           .controller('AccountDetails', AccountDetails);
}