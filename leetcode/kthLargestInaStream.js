// https://leetcode.com/problems/kth-largest-element-in-a-stream/

var KthLargest = function(k, nums) {
 this.nums = nums.sort((a,b) => b - a)
 this.k = k
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
 this.nums.push(val)
 let nums = this.nums.sort((a,b) => b - a)
 elem = this.k - 1
 return nums[elem]
};