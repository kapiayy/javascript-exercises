const fibonacci = function(x) {
    if(x < 0){
        return `OOPS`
    }else if(x == 0){
        return 0
    }
    const fib = [1,1]
   for(let i = 2; i <= x; i++){
    fib.push(fib[i-2] + fib[i-1])
   }
   return fib[x-1]
};
console.log(fibonacci(0))
// Do not edit below this line
module.exports = fibonacci;
