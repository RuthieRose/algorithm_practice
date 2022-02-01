
var climbStairs = n => {

  let counting = (stairsLeft, stairs) => {
   if (stairsLeft < 0) return 0;
   if (stairsLeft === 0) return 1;
   
   if (stairs[stairsLeft]) return stairs[stairsLeft];
 
   stairs[stairsLeft] = counting(stairsLeft -1, stairs) + counting(stairsLeft - 2, stairs);
   
   console.log(stairs)
   return stairs[stairsLeft];
  }
  
  return counting(n, {});
}

// 1 stair: 1 way
// 2 stairs: 2 ways
// 3 stairs: 3 ways
// 4 stairs: 5 ways
// 5 stairs: 8 ways
// 6 stairs: 13 ways
// Follows the fibonacci sequence!!

console.log(climbStairs(10))




