// array of distinct integers and target value
// return the index of the target
// if not there, return the index of where it would be if it were placed in order
//not sure what 0(log n) runtime complexity is
// this means that the time it takes to run is dependent on how complex it is
// indexOf target 
// if indexOf is (-1), find indexOf val - 1 then return indexOf + 1 
// repeat until closest num is located

var searchInsert = function(nums, target) {

 if (nums.indexOf(target) !== -1 ) {
   return nums.indexOf(target)
 } 
 
 if (target < nums[0]) return 0;

 if (target > nums[nums.length - 1]) return nums.length;

 let low = 0;
 let high = nums.length - 1;
 let mid;

 while (low <= high ) {
  mid = Math.floor(low + (high - low)/2);
  
  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) {
   low = mid+1;
  } else high = mid - 1;
 }
 return low;
    
};