(() => {
    'use strict';

    angular.module('app').controller('Main', Main);
	
    /* @ngInject */
    function Main(GitService) {
        const vm = this;

        GitService.getGitAccounts()
                  .then(results => { vm.results = results; });
    }
})();