function rangeOfNumbers(startN, endN){
    if(endN <= startN){
        return [startN];
    } else{
        var array = rangeOfNumbers(startN, endN-1);
        array.push(endN);
        return array;
    }
}

console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5));
module.exports = rangeOfNumbers;