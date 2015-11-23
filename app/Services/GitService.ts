module app.services {
    'use strict';

    import GitAccount = app.models.GitAccount;

    export interface IGitService {
        getGitAccounts(): ng.IPromise<GitAccount[]>;
        getGitAccount(login: string): ng.IPromise<GitAccount>;
    }

    interface IGitAccountResponseModel {
        login: string,
        email: string,
        html_url: string,
        avatar_url: string,
        bio: string
    }

    class GitService implements IGitService {

        /* @ngInject */
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) { }

        private url: string = 'https://api.github.com/users';

        getGitAccounts(): ng.IPromise<GitAccount[]> {
            return this.$http.get(this.url)
                             .then((response: ng.IHttpPromiseCallbackArg<IGitAccountResponseModel[]>) =>
                                            response.data.map(acc => new GitAccount(acc.html_url,
                                                                                    acc.login,
                                                                                    acc.email,
                                                                                    acc.avatar_url,
                                                                                    acc.bio)));
        }

        getGitAccount(login: string): ng.IPromise<GitAccount> {
            return this.$http.get(`${this.url}/${login}`)
                             .then((response: ng.IHttpPromiseCallbackArg<IGitAccountResponseModel>) =>
                                            new GitAccount(response.data.html_url,
                                                           response.data.login,
                                                           response.data.email,
                                                           response.data.avatar_url,
                                                           response.data.bio));
        }
    }

    angular.module('app')
           .service('gitService', GitService);
}