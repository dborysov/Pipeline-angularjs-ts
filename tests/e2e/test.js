'use strict';

describe('Main page', function () {
    beforeEach(function () {
        browser.get('http://localhost:801');
    })
    it('should have Accounts header', function () {
        const header = element(by.className('page-header'));
        
        expect(header).toBeDefined();
        expect(header.getText()).toBe('Accounts');
    })
});