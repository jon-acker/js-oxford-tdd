const { Given, When, Then } = require('cucumber');
const acmeSystem = require('../../src/Registration/acmeSystem');
const telephoneDirectory = require('../../src/Registration/telephoneDirectory');
const Customer = require('../../src/Registration/Customer');
const { expect } = require('chai');

let customer = (new Customer(acmeSystem, telephoneDirectory)).named('Jon');
let caughtException = null;

Given('Acme\'s compliance system requires customers to be at least {int} years old', function (minAge, callback) {
    acmeSystem.setMinimumAgeForCustomer(minAge);

    callback();
});

Given('{string} is not listed in the Greater London telephone directory', function (customerName, callback) {
    expect(telephoneDirectory.lists(customer.name)).to.be.false;

    callback();
});

When('{string} tries to register for Acme Systems', function (customerName, callback) {

    try {
        customer.register();
    } catch (e) {
        caughtException = e;
    }

    callback();
});

Then('{string} should be told they cannot be registered because they are not listed', function (customerName, callback) {
    expect(caughtException.message).to.equal('Customer ' + customerName + ' is not in directory');

    callback();
});

Then('{string} should not be registered with Acme Systems', function (customerName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
});
