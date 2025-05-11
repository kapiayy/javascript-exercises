const convertToCelsius = function(temperature) {
  celcius = Math.round(((temperature-32) * 5/9)*10) / 10
  return celcius
};

const convertToFahrenheit = function(temperature) {
  fahrenheit = Math.round((temperature * 9/5 + 32)*10) /10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


console.log(convertToCelsius(100))