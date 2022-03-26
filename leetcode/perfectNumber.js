var checkPerfectNumber = function(num) {
    
 if (num === 1) return false;
 
 let divisors = [];
 
 for (let i = 1; i <= Math.sqrt(num); i++) {
     let divisor = parseInt(num/i);
     if (divisor * i === num) {
         divisors.push(i);
         if (divisor < num && divisor !== i) divisors.push(divisor);
     }
 }
 return divisors.reduce((a,b) => a + b) === num;

};