// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

var sumOddLengthSubarrays = function(arr) {
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
     let subArray = [arr[i]]
     sum += subArray.reduce((a,b) => a + b)
     for (let j= i+1; j < arr.length; j++) {
         subArray.push(arr[j])
         if (subArray.length % 2 === 1) sum += subArray.reduce((a,b) => a + b)
     }
 }
 return sum;
};