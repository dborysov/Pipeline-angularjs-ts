'use strict';

const assert = require('assert');

module.exports = function () {
    this.Given(/^I am on a main page$/, function (callback) {

        browser.get('http://localhost:801');
        callback();
    });

    this.Then(/^I should see "(.*)" as the page title$/, title =>
        element(by.className('page-header')).getText().then(t => {
            assert.equal(t, title)
        }));
};