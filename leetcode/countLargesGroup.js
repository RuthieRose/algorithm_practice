// https://leetcode.com/problems/count-largest-group/

var countLargestGroup = function(n) {
    
 let sums = {}
 
 for (let i = 1; i <= n; i++ ) {
     
     let sum = 0
     
     if (i === i % 10) {
         sum = i
     }
     else {
         let num = i
         while (num !== num % 10) {
             let remainder = num % 10
             sum += remainder
             num = Math.floor(num / 10)
         }
         sum += num
     }
     if (sums[sum]) sums[sum].push(i)
     else sums[sum] = [i]
 }
 sums = Object.values(sums)
 
 let maxSize = 0
 
 for (let i = 0; i < sums.length; i++) {
     let sum = sums[i]
     if (sum.length > maxSize) maxSize = sum.length
 }
 
 let count = 0
 
 sums.forEach(sum => sum.length === maxSize ? count++ : '')
 
 return count
};