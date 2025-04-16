const add = function(a,b) {
    return a + b;
	
};

const subtract = function(a,b) {
    return a - b;
	
};

const sum = function(arr) {
    return arr.reduce((total, component) => total = total + component, 0);
	
};

const multiply = function(arr) {
    return arr.reduce((product, factor) => product = product * factor, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
	arr = [];
    for (let i = num; i > 0; i--) {
        arr.push(i)
    }
    return arr.reduce((product, factor) => product = product * factor, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
