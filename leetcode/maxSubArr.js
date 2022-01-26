var maxSubArray = function(nums) {

 let sumArr = nums[0];

 for (let i = 1; i < nums.length; i++) {
  nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
  sumArr = Math.max(sumArr, nums[i])
 }


 // if (nums.length === 1) return nums[0];

 //  let sumArr = nums.reduce((a,b) => a + b);

 // //One loop to reduce the array length by one

 // for (let i = nums.length - 1; i > 0; i--) {

 //   // One loop to move the start point of the reduced array to the right for each loop and then total the sum of the sub-array
 
 //   for (let j = 0; j < nums.length; j++) {
 //    let subArr = nums.slice(j,i+j);
 //    loopSum = subArr.reduce((a,b) => a + b)
   
 //    if (loopSum > sumArr) {
 //     sumArr = loopSum
 //    }
 //   }
 // }
  return sumArr;
    
};

console.log(maxSubArray([-2, -1]))