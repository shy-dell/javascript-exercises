const sumAll = function(from, to) {
    let total = 0;
    if (from >= 0 && to >= 0) {
        for (let i = from; i <= to; i++) {
            total = total + i;
        }
    } else {
        console.log("please provide only positive numbers as inputs")
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
