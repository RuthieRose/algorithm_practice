// https://leetcode.com/problems/last-stone-weight/

var lastStoneWeight = function(stones) {
    
 while (stones.length > 1) {
     
     stones.sort((a,b) => a - b)
     
     let y = stones[stones.length - 1]
     let x = stones[stones.length - 2]
     
     if (y === x) {
         stones.pop()
         stones.pop()
     }
     
     if (y > x) {
         stones.pop()
         stones.pop()
         stones.push(y - x)
     }
 }
 
 if (stones.length) return stones[0]
 else return 0
};