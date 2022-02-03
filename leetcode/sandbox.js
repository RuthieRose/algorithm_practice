

var merge = function(nums1, m, nums2, n) {

  let first = m - 1;
  let second = n - 1;
 
  for (let i = nums1.length - 1; i >= 0; i--) {
    console.log(nums1)
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
  return nums1
  } 

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))