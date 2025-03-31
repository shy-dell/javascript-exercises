// const removeFromArray = function(array, ...toRemove) {
//     // use Rest Parameters (...toRemove) to show optional number of inputs
//     // Rest Params are Array instances and therefore use array methods
//     for (let i = 0; i <= (array.length - 1); i++) {
//         if (toRemove.includes(array[i])) {
//             array.splice(i,1)
//             i--
//             // if the we splice the array, each element will not push forward 1 index bc the array is shorter
//             // correct for this by decerementing before next increment
//         } else {
//             continue;
//         }
//     } return array;
// } 

// OPTION 2 with filter
const removeFromArray = function(array, ...toRemove) {
    return array.filter((element) => !toRemove.includes(element));
}

// Do not edit below this line
module.exports = removeFromArray;
