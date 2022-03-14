var isPowerOfThree = function(n) {
    let exp = parseInt(Math.log(n)/Math.log(3));
    return 3 ** exp === n
};

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(81))
console.log(isPowerOfThree(14))