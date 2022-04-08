function sumFibonacci(num){
    if(num<=0){
        return 0;
    } else{
    var fibo = [0, 1];
    var i = 0;
    var j = 1;
    while(i+j<num){
        fibo.push(i+j);
        var k=i;
        i=j;
        j=j+k;
    }
    var sum = 0;
    for(var i=0; i<fibo.length; i++){
        if(fibo[i]%2==1){
            sum+= fibo[i];
        }
    }
    return sum;
    }
}


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;