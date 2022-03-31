// https://leetcode.com/problems/longest-harmonious-subsequence/

var findLHS = function(nums) {
    
 let values = {};
 
 for (let i= 0; i < nums.length; i++) {
     if (values[nums[i]]) values[nums[i]]++;
     else values[nums[i]] = 1;
 }
 
 let maxValue = 0;
 
 for (let key in values) {

     let keyPlusOne = +key+1
     keyPlusOne = keyPlusOne.toString();
     if (values[key] && values[keyPlusOne]) {
         maxValue = Math.max(values[key] + values[keyPlusOne], maxValue);
     }
 }
 
 return maxValue;
};