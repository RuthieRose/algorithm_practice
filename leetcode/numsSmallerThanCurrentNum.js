// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function(nums) {
 let smallerThan = []
 for (let i = 0; i < nums.length; i++) {
     let count = 0;
     nums.forEach(num => num < nums[i] ? count++ : '')
     smallerThan.push(count)
 }
 return smallerThan;
};