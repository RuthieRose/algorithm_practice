// https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function(nums) {
 let sum = 0;
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num;
 }
 
 return sum;
};