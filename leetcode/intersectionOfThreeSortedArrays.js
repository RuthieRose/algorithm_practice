// https://leetcode.com/problems/intersection-of-three-sorted-arrays/

var arraysIntersection = function(arr1, arr2, arr3) {
    
 let nums = {}
 
 for (let i = 0; i < arr1.length; i++) {
     if (nums[arr1[i]]) nums[arr1[i]]++
     else nums[arr1[i]] = 1
 }
 
 for (let i = 0; i < arr2.length; i++) {
     if (nums[arr2[i]]) nums[arr2[i]]++
     else nums[arr2[i]] = 1
 }
 
 for (let i = 0; i < arr3.length; i++) {
     if (nums[arr3[i]]) nums[arr3[i]]++
     else nums[arr3[i]] = 1
 }
 
 let allThree = []
 
 for (let num in nums) {
     if (nums[num] === 3) allThree.push(num)
 }
 
 return allThree
};