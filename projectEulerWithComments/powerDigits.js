
// Problem: Sum the integers of 2 ^ 1000
// Starting at about 2 ^ 70 the numbers get too big to be useful. 
// Enter BigInt! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

const getSum = (num, power) => {
 let exp = num ** power;
 exp = BigInt(exp)
 return exp.toString().split('').reduce((a,b) => +a + +b);
}

console.log(getSum(2,1000))


// Spoiler Alert!!