var nextGreaterElement = function(nums1, nums2) {

 let returnArray = [];

 nums1.forEach(num => {

  let numIndex = nums2.indexOf(num)+1;
  let numToPush = -1
    
   while (numIndex < nums2.length) {
    if (nums2[numIndex] > num) {
      numToPush = nums2[numIndex];
      break;
    } else numIndex++
   }

   returnArray.push(numToPush);

 })

 return returnArray;
    
};