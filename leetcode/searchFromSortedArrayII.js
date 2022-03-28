// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

var search = function(nums, target) {

 // reduce duplicates   

 nums = Array.from(new Set(nums))
// If nums is small it makes no sense to do a complex operation. Brute force is fine for small sets.

if (nums.length < 25) {
   for (let i = 0; i < nums.length; i++) {
       if (target === nums[i]) return true;
   } return false;
}

// Otherwise put the damn thing back the way it's supposed to be and then do a binary seach. Why the hell would you pivot it anyway? 🤪

let first = 0;
let last = nums.length - 1;

let mid = Math.floor((first + last)/2);
let trueFirst;

while (true) {
   
   if (nums[mid] > nums[mid + 1]) {
       trueFirst = mid+1;
       break;
   }
   
   else if (nums[mid] > nums[first]) {
       first = mid + 1;
       mid = Math.floor((first + last)/2)
   }
   
   else if (nums[mid] < nums[first]) {
       last = mid - 1;
       mid = Math.floor((first + last)/2)          
   }
}

let fixedArray = [...nums.slice(trueFirst), ...nums.slice(0,trueFirst)];

console.log(fixedArray);

let low = 0;
let high = fixedArray.length - 1;

mid = Math.floor((low + high)/2);

while (low < high) {
   if (fixedArray[mid] === target) return true;
   
   else if (target < fixedArray[mid]) {
       high = mid - 1;
       mid = Math.floor((low + high)/2);
   }
   
   else if (target > fixedArray[mid]) {
       low = mid + 1;
       mid = Math.floor((low + high)/2);
   }
}

return false;
};