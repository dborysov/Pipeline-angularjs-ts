/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
'use strict';

describe('Git service', function () {
    var GitService;

    beforeEach(function () { module('app'); });

    beforeEach(function () {
        inject(function (_gitService_) {
            GitService = _gitService_;
        });
    });

    it('should be defined', function () {
        expect(GitService).toBeDefined();
    })
})