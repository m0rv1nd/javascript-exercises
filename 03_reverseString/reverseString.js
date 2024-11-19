const reverseString = function(userString) {
    
    let stringReverse = "";
    let i = 1;

    while (i <= userString.length) {
        stringReverse += userString.at(-i);
        i++;
    }

    return stringReverse;
};

module.exports = reverseString;

