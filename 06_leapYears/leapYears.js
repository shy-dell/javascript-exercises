const leapYears = function(date) {
    if (Number.isInteger(date % 100)) {
        if (Number.isInteger(date % 4) && Number.isInteger(date % 4)) {
            return true;
        }
        else return false;
    } else if (Number.isInteger(date % 4)){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
