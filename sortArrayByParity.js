// https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function(nums) {
 let sorted = [];
 
 nums.filter(num => num % 2 === 0 ? sorted.unshift(num) : sorted.push(num))
 
 console.log(sorted)
 
 return sorted;
};