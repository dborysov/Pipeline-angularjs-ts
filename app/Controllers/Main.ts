import {IGitService} from '../services/GitService';
import {GitAccount} from '../models/GitAccount';

class Main {
    private _results: GitAccount[];

    /* @ngInject */
    constructor(gitService: IGitService) {
        gitService.getGitAccounts()
                  .then(results => { this._results = results; });
    }
}

angular.module('app').controller('Main', Main);
