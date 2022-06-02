// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

//brute force
var countPairs = function(nums, k) {
    
 let pairs = 0;
 
 for (let i = 0; i < nums.length - 1; i++) {
     for (let j = i+1; j < nums.length; j++) {
         if (nums[i] === nums[j] && i*j % k === 0) pairs++
     }
 }
 
 return pairs
};

//hash map with a sprinkle of brute force

var countPairs = function(nums, k) {
    
 let indeces = {}
 let pairs = 0
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i]
     if (indeces[num]) indeces[num].push(i)
     else indeces[num] = [i]
 }
   
  for (let num in indeces) {
      
      let arr = indeces[num]

      if (arr.length >= 2) {
          for (let i = 0; i < arr.length-1; i++) {
              for (let j = i+1; j < arr.length; j++) {
                  if (arr[i] * arr[j] % k === 0) pairs++
              }
          }
      }
  }
   
   return pairs
};