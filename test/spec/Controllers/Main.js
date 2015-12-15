/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
'use strict';

describe('Main controller', function () {
    var MainController;
    var GitServiceMock;
    var $timeout;
    var response = [1, 2, 3];

    beforeEach(function () { module('app'); });

    beforeEach(function () {
        inject(function ($controller, $q, _$timeout_) {
            GitServiceMock = jasmine.createSpyObj('GitService', ['getGitAccounts']);
            GitServiceMock.getGitAccounts.and.returnValue($q.when(response));

            $timeout = _$timeout_;

            MainController = $controller('Main', {
                gitService: GitServiceMock
            });
        });
    });

    it('should be defined', function () {
        expect(MainController).toBeDefined();
    });

    it('should call getGitAccounts on controller initialization', function () {
        expect(GitServiceMock.getGitAccounts).toHaveBeenCalled();
    });

    it('should save git accounts to a variable', function () {
        $timeout.flush();

        expect(MainController._results).toBe(response);
    })
})