function checkPrime(num) {
    if(num<=1){
        return false;
    }
    //if(num===2) return true;
    for(let i=2; i<num; i++) {
        if(num%i===0){
            return false;
        }
        else{
            return true;
        }
    }
  
}

module.exports = checkPrime

console.log(checkPrime(9992))