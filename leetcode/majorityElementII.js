// https://leetcode.com/problems/majority-element-ii/

var majorityElement = function(nums) {
    
 let magicMode = nums.length/3;
 let frequency = {};
 let allAboveMagicMode = [];
 
 for (let i = 0; i < nums.length; i++) {
     
     let num = nums[i];
     if (frequency[num]) frequency[num]++;
     else frequency[num] = 1;
 }
 
 for (let key in frequency) {
     if (frequency[key] > magicMode) allAboveMagicMode.push(key);
 }
 
 return allAboveMagicMode;
};