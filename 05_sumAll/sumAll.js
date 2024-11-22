const sumAll = function(firstInteger, secondInteger) {
    let sum = 0;
    if (Number.isInteger(firstInteger) && firstInteger > 0 && 
    Number.isInteger(secondInteger) && secondInteger > 0) {
        if (firstInteger <= secondInteger) {
            do {
                sum += firstInteger;
                firstInteger++;
            } while (firstInteger <= secondInteger)
            return sum;
        } else {
            do {
                sum += secondInteger;
                secondInteger++;
            } while (secondInteger <= firstInteger)
            return sum;
        }
    } 
    else {
        return "ERROR"
    }
};

sumAll(4, 1)
// Number.isInteger(10);
// Do not edit below this line
module.exports = sumAll;
