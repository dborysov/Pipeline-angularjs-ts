(() => {
    'use strict';

    angular.module('app').controller('AccountDetails', AccountDetails);

    /* @ngInject */
    function AccountDetails($stateParams, GitService) {
        const vm = this;

        GitService.getGitAccount($stateParams.login)
                  .then(a => vm.account = a);
    }
})();