(() => {
    'use strict';

    angular.module('app').service('GitService', GitService);

    /* @ngInject */
    function GitService($http, $q) {
        const vm = this,
              url = 'https://api.github.com/users';

        vm.getGitAccounts = () => $http.get(url).then(response => response.data);

        vm.getGitAccount = login => $http.get(`${url}/${login}`).then(response => response.data);
    }
})();