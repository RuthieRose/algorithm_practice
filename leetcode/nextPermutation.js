// https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {
    
 let i = nums.length - 2;
 
 while (i >= 0 && nums[i + 1] <= nums[i]) {
     i--;
 }
 
 if (i >= 0) {
     let j = nums.length - 1;
     while (nums[j] <= nums[i]) {
         j--;
     }
     swap(nums, i, j);
     }
   reverse(nums, i+1);
 };
 
 function reverse(nums, start) {
     
     let i = start;
     let j = nums.length - 1;
     
     while (i < j) {
         swap(nums, i, j);
         i++;
         j--;
     }
 }
 
 function swap(nums, i, j) {
     let temp = nums[i];
     nums[i] = nums[j];
     nums[j] = temp;
 }