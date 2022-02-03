
//n is the given number, k is the power to begin with

function digPow(n,k) {
  let stringN = n.toString();
  let digits = [];
  let sum= 0;
  for (let i = 0; i < stringN.length; i++) {
   digits.push(+stringN[i])
  }
  for (let i = 0; i < digits.length; i++) {
   let num = digits[i] ** (k + i);
   sum += num;
  }
  let dividend = sum/n;
  return Number.isInteger(dividend) ? dividend : -1
}

console.log(digPow(46288, 3))