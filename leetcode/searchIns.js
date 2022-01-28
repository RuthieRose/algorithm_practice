var searchInsert = function(nums, target) {
 
 if (target > nums[nums.length - 1]) return nums.length;
 if (target <= nums[0]) return 0;
    
 let mid = Math.floor(nums.length / 2);
 let low = 0;
 let high = nums.length - 1;

 let leftBound;
 
 let found = false
 
 while (low < high) {

     leftBound = low;
 
     if (nums[mid] === target) { 
         found = true;
         return mid;
     }

     else {

         if (nums[mid] < target) {
             low = mid + 1;
             mid = Math.floor((low + high)/2)
         }
         if (nums[mid] > target) {
             high = mid - 1;
             mid = Math.floor((low + high)/2)
         };


     }

 }
 
 if (found === true) return mid;
 while (target > nums[leftBound]) {
     leftBound++
 }
 return leftBound;

};

console.log(searchInsert([1,3,5], 2))
console.log(searchInsert([1,3,5,6], 2))