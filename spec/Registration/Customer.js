/* global jasmine, it, beforeEach, spyOn, describe, expect */

const CustomerFactory = require('../../src/Registration/Customer');
const acmeSystem = require('../../src/Registration/acmeSystem');

const telephoneDirectory = jasmine.createSpyObj('telephoneDirectory', ['list', 'lists']);

describe('A Customer', function() {
    let customer;

    beforeEach(() => {
        customer = CustomerFactory(acmeSystem, telephoneDirectory).named('Jon');
    });

    it('Creates a named customer', function() {
        expect(customer.name).toBe('Jon');
    });

    it('Throws exception when registering with name that is not in directory', function() {
        spyOn(acmeSystem, 'register');

        expect(() => customer.register()).toThrowError('Customer ' + customer.name + ' is not in directory');

        expect(telephoneDirectory.lists).toHaveBeenCalledWith(customer);
        expect(acmeSystem.register).not.toHaveBeenCalled();
    });

    it('Can be registered when name is listed in directory', function() {
        telephoneDirectory.lists.and.returnValue(true);
        
        spyOn(acmeSystem, 'register');
        
        customer.register();

        expect(telephoneDirectory.lists).toHaveBeenCalledWith(customer);
        expect(acmeSystem.register).toHaveBeenCalledWith(customer);
    });
});
