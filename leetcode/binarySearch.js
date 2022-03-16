var search = function(nums, target) {
    
 if (nums.length === 1 && target === nums[0]) return 0;
 
 let low = 0;
 let high = nums.length - 1;
 let mid = Math.floor((low + high)/2)
 
 while (low <= high) {
     if (nums[mid] === target) return mid;
     
     else if (nums[mid] < target) {
         low = mid + 1;
         mid = Math.floor((low + high)/2)
     }
     
     else if (nums[mid] > target) {
         high = mid-1;
         mid = Math.floor((low + high)/2)
     }
 }

 return -1
};