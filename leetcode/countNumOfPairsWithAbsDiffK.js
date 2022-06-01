// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

var countKDifference = function (nums, k) {
 let count = 0

 nums = nums.sort((a, b) => a - b)
 for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
   if (nums[j] - nums[i] === k) count++
  }
 }

 return count
};