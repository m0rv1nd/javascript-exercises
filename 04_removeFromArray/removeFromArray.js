const removeFromArray = function(userArray, ...args) {
    const newArray = Array.from(userArray);
    const finalArray = [];
    for (let i = 0; i <= userArray.length-1; i++) {
        for (let j = 0; j <= args.length-1; j++) {
            if (userArray[i] === args[j]) {
                delete newArray[i];
                break;
            } 
        }
    }
    for (let k = 0; k <= newArray.length-1; k++) {
        if (!(newArray[k] == undefined)) {
            finalArray.push(newArray[k])
        } 
    }
    console.log(finalArray);
    return finalArray;
};
console.log(removeFromArray([1, 2, 3, 4], 7, 2));

// Do not edit below this line
module.exports = removeFromArray;
