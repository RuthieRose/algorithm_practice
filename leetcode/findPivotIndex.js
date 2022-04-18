// https://leetcode.com/problems/find-pivot-index/

var pivotIndex = function(nums) {
    
 let leftSum = 0;
 let prevNum = 0;
 let rightSum = nums.reduce((a,b) => a + b);
 
 for (let i = 0; i < nums.length; i++) {
     if (i !== 0) prevNum = nums[i-1];
     leftSum += prevNum;
     rightSum -= nums[i];
     if (leftSum === rightSum) return i;
 }
 
 return -1 
};