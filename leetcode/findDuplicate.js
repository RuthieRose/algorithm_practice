// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
    
 let seen = {};
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if (seen[num]) {
         return num;
     } else {
         seen[num] = 1;
     }
 }
};