var intersection = function(nums1, nums2) {
 let intersectingArr = [];
 
 let largerArr;
 let otherArr;
 
 if (nums1.length >= nums2.length) {
     largerArr = nums1;
     otherArr = nums2;
 } else {
     largerArr = nums2;
     otherArr = nums1;
 }
 
 for (let i = 0; i < largerArr.length; i++) {
     let num = largerArr[i]
     if (otherArr.includes(num)) {
         intersectingArr.push(num)
     }
 }
 
 return Array.from(new Set(intersectingArr))
 
};