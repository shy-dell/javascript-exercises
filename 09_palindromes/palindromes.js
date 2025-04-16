const palindromes = function (forwards) {
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let arr = [...forwards
        .toLowerCase()
        .split(' ')
        .join(',')]
        .filter(letter => alphaNum.includes(letter))
    let backwards = [...arr].reverse();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === backwards[i]) {
            continue
        } else {
            return false
        };
    } return true;
};
// Do not edit below this line
module.exports = palindromes;
