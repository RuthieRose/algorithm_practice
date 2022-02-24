var singleNumber = function(nums) {
 if (nums.length === 1) return nums[0];
 
 let seen = {}
 
 for (let i = 0; i < nums.length; i++) {
     let currNum = nums[i];
     
     if (seen[currNum]) {
         delete seen[currNum]
     } else {
         seen[currNum] = true;
     }
 }

 return parseInt(Object.keys(seen)[0])
};