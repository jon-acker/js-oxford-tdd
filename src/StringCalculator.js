function sumNumbers(numbers) {
    return +numbers.reduce((total, number) => +total + +number);
}

function parseExpression(expression) {
    return expression.split(/ /);
}

module.exports = class StringCalculator {

    exec(expression) {
        let numbers = parseExpression(expression);

        return sumNumbers(numbers);
    }
};
