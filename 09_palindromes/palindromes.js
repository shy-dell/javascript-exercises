const palindromes = function (forwards) {
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let cleanedString = forwards
        .toLowerCase()
        .split('')
        .filter(letter => alphaNum.includes(letter))
        .join('');
    let backwards = cleanedString.split('').reverse().join('');

    return cleanedString === backwards;
};
// Do not edit below this line
module.exports = palindromes;
