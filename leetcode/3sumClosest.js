var threeSumClosest = function(nums, target) {

 let sum = 10000;

 for (let i =0; i < nums.length-2; i++) {
  for (let j = i+1; j < nums.length; j++) {
   for (let k = j+1; k < nums.length; k++) {
     let workingSum = nums[i] + nums[j] + nums[k];
     if (Math.abs(workingSum - target) < Math.abs(sum - target)) {
      sum = workingSum;
     }
   }
  }
 }

 return sum;
    
};

 function testThreeSum() {

  let testCases = [
   {arg: [[-1,2,1,-4], 1], expected: 2},
   {arg: [[0,0,0], 1], expected: 0},
   
  ]

  testCases.forEach(test => {
   let args = [...test.arg]
   console.log(args)
   let result = threeSumClosest(...args);
   let expected = test.expected;
   
   let passed = true;

   if (result !== expected) passed = false;
    
    if (passed) {
     status = "Passed"
    } else status = "Failed"
    console.log( `${status}. ${args} produced ${result} and the expected was ${test.expected}`)
   
  })
 }

 testThreeSum();