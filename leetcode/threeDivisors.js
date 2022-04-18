// https://leetcode.com/problems/three-divisors/

var isThree = function(n) {
    
 let divisors = [];
 
 for (let i = 1; i <= Math.sqrt(n); i++) {
     
     if (parseInt(n/i) * i === n && !divisors.includes(i)) divisors.push(i);
     if (parseInt(n/i) * i === n && !divisors.includes(n/i)) divisors.push(n/i);
     
 }
 console.log(divisors)
 return divisors.length === 3;
};