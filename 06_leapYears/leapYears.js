const leapYears = function(date) {
    if (Number.isInteger(date / 100) && Number.isInteger(date / 400)) {
        return true;
    } else if (Number.isInteger(date / 4) && !Number.isInteger(date / 100)){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
