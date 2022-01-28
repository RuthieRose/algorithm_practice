function getSum(a,b) {
 if (a===b) return a;
 let sum = 0;
 let start = Math.min(a,b);
 let finish = Math.max(a,b);

 for (let i = start; i <= finish; i++) {
  sum += i;
 }

 return sum;

}