/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

describe('Git service', function () {
    var _GitService;

    beforeEach(module('app'));

    beforeEach(inject(function (_gitService_) {
        _GitService = _gitService_;
    }));

    it('should have Git service be defined', function () {
        expect(_GitService).toBeDefined();
    })
})