'use strict';

describe('Main controller', function () {
    var mainController;
    var gitServiceMock;
    var $timeout;
    var response = [1, 2, 3];

    beforeEach(function () { module('app'); });

    beforeEach(function () {
        inject(function ($controller, $q, _$timeout_) {
            gitServiceMock = jasmine.createSpyObj('GitService', ['getGitAccounts']);
            gitServiceMock.getGitAccounts.and.returnValue($q.when(response));

            $timeout = _$timeout_;

            mainController = $controller('Main', {
                gitService: gitServiceMock
            });
        });
    });

    it('should be defined', function () {
        expect(mainController).toBeDefined();
    });

    it('should call getGitAccounts on controller initialization', function () {
        expect(gitServiceMock.getGitAccounts).toHaveBeenCalled();
    });

    it('should save git accounts to a variable', function () {
        $timeout.flush();

        expect(mainController._results).toBe(response);
    })
})