// https://leetcode.com/problems/set-mismatch/

var findErrorNums = function(nums) {
    
 nums = nums.sort((a,b) => a -b);
 
 let double;
 let original = 1;
 
 for (let i = 1; i < nums.length; i++) {
     if (nums[i] === nums[i-1]) {
        double = nums[i]; 
     }
     else if (nums[i] > nums[i-1] + 1) {
        original = nums[i-1] + 1
     }
 }
 
 if (nums[nums.length - 1] !== nums.length) original = nums.length;
 
 return [double, original];
};