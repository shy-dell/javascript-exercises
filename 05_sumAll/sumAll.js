const sumAll = function(start, end) {
    if (start < 0 
        || end < 0
        || !Number.isInteger(start)
        || !Number.isInteger(end)
    ) return "ERROR";
    // use array destructuring to swap values if starts with high number
    // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    if (start > end) [start, end] = [end, start];

    let total = 0;
    for (let i = start; i <= end; i ++) {
        total += i;
    }
    return total;
    }

// Do not edit below this line
module.exports = sumAll;
