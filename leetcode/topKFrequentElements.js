// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    
 let elements = {};
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if (elements[num]) elements[num]++;
     else elements[num] = 1;
 }
 
 let values = (Object.values(elements)).sort((a,b) => b - a);
 
 let kValues = values.slice(0,k);
 
 let kNums = [];
 
  
     for (let key in elements) {
         if (kValues.includes(elements[key])) kNums.push(key);
     } 
 
   return kNums;  
};