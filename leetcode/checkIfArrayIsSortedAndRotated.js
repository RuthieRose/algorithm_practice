https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

var check = function(nums) {
    
 let sorted = true;
 
 while (nums[0] > nums[nums.length -1]) {
     let move = nums.shift();
     nums.push(move);
 }
 
 let count = nums.length;
 while (nums[nums.length -1] <= nums[0]) {
     let move = nums.pop();
     nums.unshift(move);
     count--
     if (count === 0) break;
 }
 
 for (let i = 0; i < nums.length-1; i++) {
     if (nums[i] > nums[i+1]) sorted = false;
 }
 
 return sorted;
};