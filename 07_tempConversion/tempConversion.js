const convertToCelsius = function(farenheit) {
  const convert = (farenheit - 32) * 5/9;
  return Math.round(convert * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const convert = celsius * 9/5 + 32;
  return Math.round(convert * 10) / 10;
};

convertToCelsius(100)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
