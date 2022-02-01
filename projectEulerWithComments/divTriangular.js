// First triangle number: 1 (1)
// Second triangle number: 3 (1+2)
// Third triangle number: 6 (1+2+3)
// Fourth triangle number: 10 (1+2+3+4)
// Fifth triangle number: 15 (1+2+3+4+5)
// Sixth triangle number: 21 (1+2+3+4+5+6)
// Seventh triangle number: 28 (1+2+3+4+5+6+7)
// Eighth triangle number: 36 (1+2+3+4+5+6+7+8)
// Ninth triangle number: 45 (1+2+3+4+5+6+7+8+9)
// Tenth triangle number: 55 (1+2+3+4+5+6+7+8+9+10)

// Find the factors of each triangle number (include 1 and the number itself)

// Find the first triangle number to have over five hundred divisors

// Generate the triangle number, summing is OK, don't have to preserve the full list

// Find the factors for each triangle number. The only duplicate would be the square root. If i is the square root, add 1. Otherwise, add 2.

// global variable to be accessed by helper function and main function
let stats;

//helper function to get the factors of a triangle number
//all numbers have factors up until the square root of the number
const getFactors = n => {
 let factors = 0;
 for (let i = 1; i <= Math.sqrt(n); i++) {
  if (Number.isInteger(n/i)) {
   if (i !== n/i) factors+=2;
   else factors++;
  }
 }
 return factors;
}

// Helper function that generates the triangle number and also gets the factors. It returns the global set variable
const getTriangleNumber = n => {
 let sum = 0;
 for (let i = 1; i < n; i++) {
    sum += i
 }
 triangleNumber = sum;
 let factors = getFactors(sum);
 stats = {triangleNumber, factors}
 console.log('n', n, stats);
 return stats;
}

// Main function that iterates up and returns stats when the given number of factors is reached. For testing purposes can take any desired number of factors and not just what the problem is solving for
const find = m => {

 let n = 1
 do {
  getTriangleNumber(n);
  n++
 } while (stats.factors < m);
 
 return stats;
}

console.log(find(600))