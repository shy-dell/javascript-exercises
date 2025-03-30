const reverseString = function(input) {
    let word = String(input);
    let reverseWord = "";
    for (let i = (word.length - 1); i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
