
 // * @param {number[]} nums1
 // * @param {number} m
 // * @param {number[]} nums2
 // * @param {number} n
 // * @return {void} Do not return anything, modify nums1 in-place instead.

//  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// var merge = function(nums1, m, nums2, n) {
//     let mergedArr = []

//     let k = Math.max(m,n)
//     let l = Math.min(m,n)

//     nums1 = nums1.slice(0,m)
//     console.log(nums1)
   
//     for (let i = 0; i < l; i++) {
//      if (nums1[0] < nums2[0]) {
//       mergedArr.push(nums1[0])
//       nums1.shift()
//       console.log('merged', mergedArr, 'nums1', nums1)
//      } else {
//       mergedArr.push(nums2[0])
//       nums2.shift()
//       console.log('merged', mergedArr, 'nums2', nums2)
//      }
//     }
//     nums1 = [...mergedArr, ...nums1, ...nums2]
//     console.log(nums1)
// };

var merge = function(nums1, m, nums2, n) {

 let first = m - 1;
 let second = n - 1;

 for (let i = nums1.length - 1; i >= 0; i--) {
  if (second < 0) {
   return nums1
  }

  if (nums1[first] > nums2[second]) {
   nums1[i] = nums1[first]
   first--
  } else {
   nums1[i] = nums2[second]
   second--
  }
 }
 } 

 
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))