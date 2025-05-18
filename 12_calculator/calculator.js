const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
 
  return array.reduce((accumulator,currentValue)=> accumulator+currentValue,0)
    
};

const multiply = function(array) {
  return array.reduce((accumulator,currentValue) => accumulator*currentValue)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(x) {
  //1 * 1 = 1
  //1 * 2 = 2
  //2 * 3 = 6
  //6 * 4 = 24
  // 24 * 5 = 120
  if(x == 0){
    return 1
  }else if(x > 0){
  let result = 1
  for(let i = 1; i <= x; i++){
    result *= i
    }
    return result
  }
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
