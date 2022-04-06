// https://leetcode.com/problems/divide-array-into-equal-pairs/

var divideArray = function(nums) {
    
 let numPairs = {};
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if (!numPairs[num]) numPairs[num] = 1;
     else numPairs[num]++;
 }
 
 let numCount = Object.values(numPairs);
 
 return numCount.every(num => num % 2 === 0);
};