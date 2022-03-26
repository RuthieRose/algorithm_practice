var checkPerfectNumber = function(num) {
    
 if (num === 1) return false;
 
 let divisors = 0;
 
 for (let i = 1; i <= Math.sqrt(num); i++) {
     let divisor = parseInt(num/i);
     if (divisor * i === num) {
         divisors += i;
         if (divisor < num && divisor !== i) divisors += divisor;
     }
 }
 return divisors === num;

};