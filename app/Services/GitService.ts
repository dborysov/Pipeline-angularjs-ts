import {GitAccount} from '../models/GitAccount';

export interface IGitService {
    getGitAccounts(): ng.IPromise<GitAccount[]>;
    getGitAccount(login: string): ng.IPromise<GitAccount>;
}

interface IGitAccountResponseModel {
    avatar_url: string;
    bio: string;
    email: string;
    html_url: string;
    login: string;
}

class GitService implements IGitService {
    private _$http: ng.IHttpService;
    private _$q: ng.IQService;

    /* @ngInject */
    constructor($http: ng.IHttpService, $q: ng.IQService) {
        this._$http = $http;
        this._$q = $q;
     }

    private url = 'https://api.github.com/users';

    public getGitAccounts() {
        return this._$http.get(this.url).then((response: ng.IHttpPromiseCallbackArg<IGitAccountResponseModel[]>) =>
                response.data.map(acc => new GitAccount(acc.html_url,
                                                        acc.login,
                                                        acc.email,
                                                        acc.avatar_url,
                                                        acc.bio)));
    }

    public getGitAccount(login: string) {
        return this._$http.get(`${this.url}/${login}`).then((response: ng.IHttpPromiseCallbackArg<IGitAccountResponseModel>) =>
                new GitAccount(response.data.html_url,
                               response.data.login,
                               response.data.email,
                               response.data.avatar_url,
                               response.data.bio));
    }
}

angular.module('app').service('gitService', GitService);
