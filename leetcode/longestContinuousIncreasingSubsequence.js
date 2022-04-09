// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

var findLengthOfLCIS = function(nums) {
   
 let maxCount = 0;
 let count = 0;
 
 for (let i = 0; i < nums.length; i++) {
     let currNum = nums[i];
     if (count === 0) count++;
     if (i > 0) {
        let prevNum = nums[i-1];
        if (currNum > prevNum) count++;
        if (prevNum >= currNum) count = 1;  
     }
     
     maxCount = Math.max(count, maxCount);
 }
  
  return maxCount;
};