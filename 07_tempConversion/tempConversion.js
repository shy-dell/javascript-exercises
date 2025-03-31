const convertToCelsius = function(tempFahrenheit) {
	const tempCelsius = ((tempFahrenheit - 32) * (5/9));
	return tempCelsius === 0 ? tempCelsius : Number(tempCelsius.toFixed(1));
	
};

const convertToFahrenheit = function(tempCelsius) {
	const tempFahrenheit = (tempCelsius * (9/5) + 32);
	return tempFahrenheit === 0 ? tempFahrenheit : Number(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
