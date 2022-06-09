// https://leetcode.com/problems/find-target-indices-after-sorting-array/

var targetIndices = function(nums, target) {
    
 nums = nums.sort((a,b) => a - b)
 let targets = []
 nums.forEach((num, index) => num === target ? targets.push(index) : '')
 return targets
};