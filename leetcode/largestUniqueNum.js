// https://leetcode.com/problems/largest-unique-number/

var largestUniqueNumber = function(nums) {
 nums = nums.sort((a,b) => a - b)
 while (nums.length) {
     let num = nums.pop()
     if (num !== nums[nums.length - 1]) return num
     else {
         while (nums[nums.length - 1] === num) nums.pop()
     }
 }
 return -1
};