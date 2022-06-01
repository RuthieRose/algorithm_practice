// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    
 return nums.map((num, index) => nums.slice(0, index+1).reduce((a,b) => a + b))
 
};