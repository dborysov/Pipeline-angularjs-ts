'use strict';

describe('AccountDetails controller', function () {
    var accountDetailsController;
    var gitServiceMock;
    var $timeout;
    var response = { firstName: 'John', lastName: 'Smith' };
    var currentPageLogin = 'testLogin';

    beforeEach(function () { module('app'); });

    beforeEach(function () {
        inject(function ($controller, $q, _$timeout_) {
            gitServiceMock = jasmine.createSpyObj('GitService', ['getGitAccount']);
            gitServiceMock.getGitAccount.and.returnValue($q.when(response));

            $timeout = _$timeout_;

            accountDetailsController = $controller('AccountDetails', {
                gitService: gitServiceMock,
                $stateParams: { login: currentPageLogin }
            });
        });
    });

    it('should be defined', function () {
        expect(accountDetailsController).toBeDefined();
    });

    it('should call getGitAccount on controller initialization', function () {
        expect(gitServiceMock.getGitAccount).toHaveBeenCalledWith(currentPageLogin);
    });

    it('should save git accounts to a variable', function () {
        $timeout.flush();

        expect(accountDetailsController._account).toBe(response);
    })
})