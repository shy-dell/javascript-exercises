const arr = [1,2,3,4,5];

function sumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 == 0)
        .map((num) => num * 3)
        .reduce((total, current) => total + current);
}

console.log(sumOfTripledEvens(arr));