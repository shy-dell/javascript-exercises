const sumAll = function(start, end) {
    let total = 0;

    if (start >= 0 
        && end >= 0
        && typeof start == "number" 
        && typeof start == "number"
        && Number.isInteger(start)
        && Number.isInteger(end)
    ) {
        if(end > start){
            for (let i = start; i <= end; i++) {
                total = total + i;
            }
        } else {
            for (let i = end; i <= start; i++) {
                total = total + i;
            }
        }
    } else {
        total = "ERROR"
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
