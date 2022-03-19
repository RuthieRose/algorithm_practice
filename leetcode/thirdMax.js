var thirdMax = function(nums) {
    
 nums = nums.sort((a,b) => b -a);
 nums = Array.from(new Set(nums));
 
 console.log(nums)
 if (nums.length < 3) return nums[0];
 else return nums[2]

};