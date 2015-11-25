import {IGitService} from '../services/GitService';
import {GitAccount} from '../models/GitAccount';

class Main {
    private results: GitAccount[];

    /* @ngInject */
    constructor(private gitService: IGitService) {
        gitService.getGitAccounts()
                  .then(results => { this.results = results; });
    }
}

angular.module('app').controller('Main', Main);