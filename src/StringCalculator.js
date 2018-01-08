function sum(array) {
    return array.reduce((t, n) => t + +n, 0);
}

module.exports = class StringCalculator 
{
    add(experssion) {
        if (!experssion || experssion.length === 1) {
            return +experssion;
        }

        return sum(experssion.split(/\s/));
    }
};
