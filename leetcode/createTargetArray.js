// https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
 let target = []
 
 for (let i = 0; i < nums.length; i++) {
     target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])]
 }
 
 return target;
};