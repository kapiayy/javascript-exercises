const removeFromArray = function(arr,...number) {
    
    for(let i =0; i < arr.length; i++){
        for(let j = 0 ;j < number.length;j++){
            if(arr[i] === number[j]){
            arr.splice(i,1)
            i--
           
        }
       
        }
    }return arr
};
console.log(removeFromArray([1,2,3,4],1,2,3))
// Do not edit below this line
module.exports = removeFromArray;
