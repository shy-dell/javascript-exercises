const fibonacci = function(number) {
    let prevNumber = 0;
    let arr = [1];
    if (Number(number) < 0) {
        return "OOPS"
    } else if (Number(number) === 0) {
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
