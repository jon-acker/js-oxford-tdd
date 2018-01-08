/* global it, describe, beforeEach, expect */

const StringCalculator = require('../src/StringCalculator');
let calculator;

describe('The String Calculator', function() {

    beforeEach(function() {
        calculator = new StringCalculator();
    });

    it('returns 0 for an empty string', function() {
        expect(calculator.add('')).toBe(0);
    });

    it('returns bare number given one number', function() {
        expect(calculator.add('2')).toBe(2);
    });

    it('returns sum of two space separated numbers', function() {
        expect(calculator.add('2 3')).toBe(5);
    }); 

    it('returns sum of many space separated numbers', function() {
        expect(calculator.add('1 2 3')).toBe(6);
    }); 

    // it('returns sum of any whitespace separated numbers', function() {
    //     expect(calculator.add('2 3\t4')).toBe(9);
    // }); 
});