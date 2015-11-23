module app.controllers {
    'use strict';

    import IGitService = app.services.IGitService;
    import GitAccount = app.services.GitAccount;

    class Main{
        private results: GitAccount[];

        /* @ngInject */
        constructor(private gitService: IGitService){
            gitService.getGitAccounts()
                      .then(results => { this.results = results; });}
    }

    angular.module('app').controller('Main', Main);
}