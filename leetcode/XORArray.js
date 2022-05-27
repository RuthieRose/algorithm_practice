// https://leetcode.com/problems/xor-operation-in-an-array/

var xorOperation = function(n, start) {
 let nums = [start]
 for (let i = 1; i < n; i++) {
     nums.push(start + 2 * i)
 }
 return nums.reduce((a,b) => a ^ b)
};