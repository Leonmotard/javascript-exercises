const convertToCelsius = function (temperature) {
  // (x − 32) × ⁠5/9⁠ °C 
  let temperatureConverted = (temperature - 32) * (5 / 9);
  if (Number.isInteger(temperatureConverted)) {
    return temperatureConverted;
  } else return Math.round(temperatureConverted * 10) /10;
};

const convertToFahrenheit = function (temperature) {
  //(x × ⁠9/5⁠ + 32) 
  let temperatureConverted = (temperature * (9 / 5) + 32);
  if (Number.isInteger(temperatureConverted)) {
    return temperatureConverted;
  } else return Math.round(temperatureConverted * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
