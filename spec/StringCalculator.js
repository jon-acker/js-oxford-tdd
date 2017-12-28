/* global it, describe, expect */
const StringCalculator = require('./StringCalculator');

describe('The String Calculator', function() {
    it('returns 0 for an empty string', function() {
        let calculator = new StringCalculator();
        
        expect(calculator.add('')).toBe(0);
    });
});