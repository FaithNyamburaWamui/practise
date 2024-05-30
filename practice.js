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
console.log(isPrime(11));

class Ankara{
    constructor(temp,mood){
        this.temp=temp;
        this.mood=mood;
    }

 checkTemp(){
     if(this.temp<=15){
        console.log("It is hot")
     }
     else if(this.temp>15 && this.temp>=30){
        console.log("It is moderate")
     }
     else{
        console.log("It is too hot")
     }
}
 checkMood(){
    if(this.mood ==="Happy"){
        console.log("fabric is spotted")
    }

else if(this.mood==="Neutral"){
    console.log("Fabric remains the same")
}
else if(this.mood==="Sad"){
    console.log("Fabric is animal print")
}};  
};

const ankara= new Ankara(30,"Happy");
ankara.checkMood();
ankara.checkTemp();


