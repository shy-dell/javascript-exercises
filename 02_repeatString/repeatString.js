const repeatString = function(string, num) {
    let words = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            words = words + string;
        }
    } else {
        words = "ERROR";
    }
    return words
};

repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
