// https://leetcode.com/problems/partition-array-according-to-given-pivot/

var pivotArray = function(nums, pivot) {
 console.log(nums, pivot)
 let beforePivot = []
 let afterPivot = []
 let pivots = []
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i]
     if (num < pivot) beforePivot.push(num)
     if (num === pivot) pivots.push(num)
     if (num > pivot) afterPivot.push(num)
 }
 
 return [...beforePivot, ...pivots, ...afterPivot]
};