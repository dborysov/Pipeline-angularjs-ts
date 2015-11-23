module app.services {
    'use strict';

    export interface IGitService {
        getGitAccounts(): ng.IPromise<GitAccount[]>;
        getGitAccount(login: string): ng.IPromise<GitAccount>;
    }

    export class GitAccount { }

    export class GitService implements IGitService {
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) { }
        private url: string = 'https://api.github.com/users';

        getGitAccounts(): ng.IPromise<GitAccount[]> {
            return this.$http.get(this.url).then(response => <GitAccount[]>response.data);
        }

        getGitAccount(login: string): ng.IPromise<GitAccount> {
            return this.$http.get(`${this.url}/${login}`).then(response => <GitAccount>response.data);
        }
    }

    angular.module('app')
           .service('gitService', GitService);
}