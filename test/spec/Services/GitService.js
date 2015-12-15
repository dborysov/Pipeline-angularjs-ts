/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
'use strict';

describe('Git service', function () {
    var _GitService;

    beforeEach(module('app'));

    beforeEach(inject(function (_gitService_) {
        _GitService = _gitService_;
    }));

    it('should be defined', function () {
        expect(_GitService).toBeDefined();
    })
})