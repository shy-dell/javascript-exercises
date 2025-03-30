const removeFromArray = function(array, position) {
    const index = position - 1;
    const spliced = array.toSpliced(index, 1);
    return spliced;
};

// Do not edit below this line
module.exports = removeFromArray;
