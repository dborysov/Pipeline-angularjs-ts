'use strict';

describe('Git service', function () {
    var gitService;

    beforeEach(function () { module('app'); });

    beforeEach(function () {
        inject(function (_gitService_) {
            gitService = _gitService_;
        });
    });

    it('should be defined', function () {
        expect(gitService).toBeDefined();
    })
})