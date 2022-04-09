function rangeOfNumbers(startN, endN){
    if(startN>endN) return "The starting number will always be less than or equal to ending number";
    if(startN == endN){
        return [endN];
    } else {
        partOfRange = rangeOfNumbers(startN, endN-1);
        partOfRange.push(endN);
        return partOfRange; 
    }
}

console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5));
module.exports = rangeOfNumbers;