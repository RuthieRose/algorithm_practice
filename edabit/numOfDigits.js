function num_of_digits(num) {
 if (num === 0) {
  return 1;
 }
  let count = 0;
  let absNum = Math.abs(num) + 1
  while (absNum > 1) {
   absNum /= 10;
   count +=1
   console.log(Math.abs(num) + 1, count)
  }
  return count
 }

console.log(num_of_digits(13124))