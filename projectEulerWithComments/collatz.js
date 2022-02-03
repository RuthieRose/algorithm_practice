// Collatz Conjecture
// n => n/2, if n is even 
// n => 3n + 1, if n is odd

// This is a story about 2!!
// If we are saying that you can subtract one from a number until you get down to one no one argues with that even though infinity minus one is still infinity so of course it would be out of bounds at that point...
// Maybe I missed something but the question shouldn't be about getting down to 1, this is about 2, since 2 is the sole even prime. This is question for two is like counting down to one
// Because we are looking at the ones digit to determine if a number is odd or even, all behaviors will be determined by 1-10 since all other numbers are simply powers of 10
// An odd number multiplied an odd number of times will always be odd. 
// Adding 1 to an odd number will always make it even
// Dividing any even number by 2 will either yield another even number or an odd number. When 1 is repeatedly added to an odd number and then divided again, eventually the result will be 2 since 2 is a divisor of every even number. 
// Another way to look at it is when multiplying by 3, it's the same thing as multiplying its even by 3 and then adding 4. Instead of 3n + 1 you can say 3(n - 1)+ 4. For example: 7 : (6 * 3) + 4
// 10 : 5, 16, 8, 4, 2, 1
// 9 : 28, 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
// 8 : 4, 2, 1
// 7 : 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
// 6 : 3, 10, 5, 16, 8, 4, 2, 1
// 5 : 16, 8, 4, 2, 1
// 4 : 2, 1
// 3 : 10, 5, 16, 8, 4, 2, 1
// 2 : 1
// 1 : 4, 2, 1
// At that point then 2/2 becomes one. 

// Generate Collatz Number 
// Count each cycle
// Hold an overall count variable
// Check only odd numbers since evens will have fewer calculations
//in the larger function

const findMostCollatzNums = () => {
 let largestCount = 0;
 let largestCountNum = 0;

 const getCollatzNums = (num, count, currentNum) => {
  if (num === 1) {
   if (count > largestCount) {
    largestCount = count;
    largestCountNum = currentNum;
   }
   return;
   }
  else if (num % 2 === 0) {
   num /= 2;
   count++
  }
  else {
   num = num * 3 + 1;
   count++
  }
  return getCollatzNums(num, count, currentNum)
 }

 for (let i = 1; i < 1000000000; i += 2) {
  let currentNum = i;
  let count = 0;
  
  getCollatzNums(i, count, currentNum);
 }
 return {largestCountNum, largestCount}
}

console.log(findMostCollatzNums())