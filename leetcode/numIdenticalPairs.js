// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    
 let equals = {};
 let numsPairs = 0;
 
 for (let i = 0; i < nums.length; i++) {
    if (equals[nums[i]]) equals[nums[i]].push(i)
    else equals[nums[i]] = [i]
 }

 function getCombinations(length) { 
   return (length * (length - 1)) /2
 } 
 
 for (let num in equals) {
     if (equals[num].length > 1) {
         numsPairs += getCombinations(equals[num].length)
     }
     console.log(num, numsPairs)
 }
 
 return numsPairs
};