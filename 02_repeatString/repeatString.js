const repeatString = function(string, num) {
    let concatString = "";
    if (num < 0) return "ERROR";
    for (let i = 0; i < num; i++) {
        concatString += string;
    }
    return concatString; 
};

// Do not edit below this line
module.exports = repeatString;
