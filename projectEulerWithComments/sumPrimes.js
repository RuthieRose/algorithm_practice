// This problem is for summing Primes up to a specific number.

const getPrimeSum = n => {
 let primes = [2];
 let start = 3;

 //Check to see if any number in primes is a factor
 const checkForPrimes = num => {
  let isPrime = true;
  primes.some(prime => {
   if (num % prime === 0) {
    isPrime = false;
   }
  })
  return isPrime;
 }

//Add a new prime to the array
 while (start < n) {
  if (checkForPrimes(start)) {
   primes.push(start);
  }
  start+=2
 }
 //Get the sum of primes
 return primes.reduce((a,b) => a + b);
}

console.log(getPrimeSum(2000))