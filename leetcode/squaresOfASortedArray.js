// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    
 return nums.map(num => num*num).sort((a,b) => a - b);
 
};