const StringCalculator = require('../src/StringCalculator');

describe('A String Calculator', function ()  {
    it('It returns 0 for an empty string', function () {
        let calculator = new StringCalculator();

        expect(calculator.exec('')).toBe(0);
    })

    it('It returns just bare number', function () {
        let calculator = new StringCalculator();

        expect(calculator.exec('3')).toBe(3);
    })

    it('It returns sum of two space separated numbers', function () {
        let calculator = new StringCalculator();

        expect(calculator.exec('1 2')).toBe(3);
    })

    it('It returns sum of any space separated numbers', function () {
        let calculator = new StringCalculator();

        expect(calculator.exec('1 2 3')).toBe(6);
    })
});
