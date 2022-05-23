// https://leetcode.com/problems/decompress-run-length-encoded-list/

var decompressRLElist = function(nums) {
 let list = []
 for (let i = 1; i < nums.length; i+=2) {
     for (let j = 0; j < nums[i-1]; j++) {
         list.push(nums[i])
     }
 }
 return list;
};