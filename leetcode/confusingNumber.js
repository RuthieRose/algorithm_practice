
// https://leetcode.com/problems/confusing-number/

var confusingNumber = function(n) {
    
 let reverseN = n.toString().split('').reverse();
 if (reverseN.includes('2') || reverseN.includes('3') || reverseN.includes('4') || reverseN.includes('5') || reverseN.includes('7')) return false;
 for (let i = 0; i < reverseN.length; i++) {
   let num = reverseN[i];
   console.log(num)
   if (num === '6') {
       reverseN[i] = '9'
   } else if (num === '9') {
       reverseN[i] = '6'
   }
 }
 reverseN = reverseN.join('');
 reverseN = +reverseN;
 if (n === reverseN) return false;
 return true;
 
};

