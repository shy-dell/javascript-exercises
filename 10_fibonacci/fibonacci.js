const fibonacci = function(number) {
    Number(number);
    let prevNumber = 0;
    let arr = [1];
    if (number < 0) {
        return "Oops"
    } else if (number === 0) {
        return prevNumber;
    } else {
        for (let i = 0; i < number - 1; i++){
            let nextNumber = prevNumber + arr[i];
            arr.push(nextNumber);
            prevNumber = arr[i];
        }
    }
    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
