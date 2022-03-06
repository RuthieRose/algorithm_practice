var isPowerOfTwo = function(n) {
   
 if (Math.log2(n) === parseInt(Math.log2(n))) return true;

 else return false

};

console.log(isPowerOfTwo(16))