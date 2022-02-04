
// keep a running sum
// get divisors for a number, store that number
// get the sum of those divisors. If that sum equals the stored numbers, it is an amicable pair. 
// add both to the running sum
let amicablePairs = {}

const isAmicable = n => {

 let sum = 1;
 let num = n-1;

 // check if pair has already been added
 for (let key in amicablePairs) {
  if (amicablePairs[key] === n) return false;
 }

 // get divisors sums
 for (let i = 2; i <= Math.sqrt(n); i++) {
  if (Number.isInteger(n/i)) {
     sum += i;
     if (i !== sum) sum += n/i
  }
 }

 // check sum 
 for (let i = 2; i <= Math.sqrt(sum); i++) {
  if (Number.isInteger(sum/i)) {
    num -= i;
    if (num !== i) num -= sum/i
  }
 }

 if (num === 0 && n !== sum) {
  amicablePairs[n] = sum;
 }

 return amicablePairs;
}

const getAmicableSums = n => {
 for (let i = 0; i < n; i++) {
  isAmicable(i)
 }
 
 let amicablePairs1 = Object.entries(amicablePairs).flat()
 return amicablePairs1.reduce((a,b) => +a + +b);
}
console.log(getAmicableSums(10000))