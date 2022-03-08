var missingNumber = function(nums) {
    
 nums = nums.sort((a,b) => a - b)
 let missingNum;
 
 for (let i = 0; i < nums.length - 1; i++) {
     let small = nums[i];
     let large = nums[i+1];
     
     if (large - small > 1) {
         missingNum = small + 1
         return missingNum;
     }
 }

 if (nums[0] === 0) return nums[nums.length -1] + 1;
 else return 0;
};