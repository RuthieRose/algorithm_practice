// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
 let shuffledArray = []
 for (let i = 0; i < n; i++) {
     shuffledArray.push(nums[i])
     shuffledArray.push(nums[i+n])
 }
 return shuffledArray
};