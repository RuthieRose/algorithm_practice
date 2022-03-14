var isPowerOfFour = function(n) {
 let exp = parseInt(Math.log(n)/Math.log(4));
 return 4 ** exp === n
};

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(64))
console.log(isPowerOfFour(14))