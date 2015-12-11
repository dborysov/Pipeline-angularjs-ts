/// <reference path="../../typings/angular-ui-router/angular-ui-router" />

import {IGitService} from '../services/GitService';
import {GitAccount} from '../models/GitAccount';

class AccountDetails {
    private _account: GitAccount;

    /* @ngInject */
    constructor($stateParams: ng.ui.IStateParamsService, gitService: IGitService) {
        gitService.getGitAccount($stateParams['login'])
                  .then(account => this._account = account);
    }
}

angular.module('app').controller('AccountDetails', AccountDetails);
