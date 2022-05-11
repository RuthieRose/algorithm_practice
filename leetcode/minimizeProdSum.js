// https://leetcode.com/problems/minimize-product-sum-of-two-arrays/

var minProductSum = function(nums1, nums2) {
    
 let newNums1 = nums1.sort((a,b) => a - b)
 let newNums2 = nums2.sort((a,b) => b - a)
 console.log(newNums1, newNums2)
 let products = []
 
 for (let i = 0; i < nums2.length; i++) {
   products.push(newNums1[i] * newNums2[i])
 }
 return products.reduce((a,b) => a + b)
};