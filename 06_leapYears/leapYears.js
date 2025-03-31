const leapYears = function(date) {
    const isCentury = date % 100 === 0;
    const isDivisiblebyFour = date % 4 === 0;
    const isDivisibleby400 = date % 400 === 0;

    if (isDivisiblebyFour && (!isCentury || isDivisibleby400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
