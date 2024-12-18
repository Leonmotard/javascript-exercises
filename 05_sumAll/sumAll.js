const sumAll = function (number1, number2) {
    const validations = (
        number1 < 0 ||
        number2 < 0 ||
        !Number.isInteger(number1) ||
        !Number.isInteger(number2) ||
        Number.isNaN(number1) ||
        Number.isNaN(number2)
    );

    if (validations) return 'ERROR';

    let finalSum = 0;
    if (number1 < number2) {
        for (let i = number1; i <= number2; i++) {
            finalSum += i;
        }
    } else {
        for (let i = number2; i <= number1; i++) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
