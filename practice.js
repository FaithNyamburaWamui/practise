function isPrime(number){
    if(number<=0){
        return "Not a prime number"
    }
    else if(number===2){
        return "Prime number"
    }
    else if(number%2===0){
        return "Not prime number"
    }
    for(let i=3;i*i<=number;i++){
        if(number%i===0){
            return "Not prime number"
        }
        return "Prime number"
    }
};
console.log(isPrime(10));