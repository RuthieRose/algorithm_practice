/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
 
  if (nums.every(num => num === 0) && nums.length >= 3) return [[0,0,0]];
  if (nums.length < 3) return [];
 
  let len = nums.length;
  let zeroSum = [];
 
  nums = nums.sort((a,b) => a - b);

  let i = 0;

  for (let i = 0; i < nums.length-2; i++) {
   
   while (nums[i] === nums[i-1]) {
    i++;
   }

   let num1 = nums[i];

   if (num1 > 0) break;

   let pointer2 = i+1;
   let pointer3 = nums.length - 1;

    console.log('num1', num1, 'nums2', nums[pointer2], 'nums3', nums[pointer3])
  
    while(pointer2 < pointer3) {
     if ((num1+ nums[pointer2] + nums[pointer3]) < 0) {
      pointer2++;
     } else if ((num1+ nums[pointer2] + nums[pointer3]) > 0) {
      pointer3--;
     } else {
       zeroSum.push([nums[i], nums[pointer2], nums[pointer3]]);
       pointer2++;
       while (nums[pointer2] === nums[pointer2-1]) {
        pointer2++;
       }
       pointer3--;
     }
    }
   }
  
  return zeroSum;
 };

 function testThreeSum() {

  let testCases = [
   {arg: [-1,0,1,2,-1,-4], expected: [[-1,-1,2],[-1,0,1]]},
   {arg: [], expected: []},
   {arg: [0], expected: []},
   {arg: [-2,0,1,1,2], expected: [[-2,0,2], [-2,1,1]]},
   {arg: [-1,0,1,0], expected: [[-1,0,1]]},
   {arg: [-1,0,1,2,-1,-4,-2,-3,3,0,4], expected: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]},
   {arg: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], expected: [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]}
  ]
  

  testCases.forEach(test => {
   let result = threeSum(test.arg);
   let testArray = test.expected;
   console.log(result, testArray)
   let passed = true;
   if (testArray.length !== result.length) {
    passed = false;
   } else {
    for (let i = 0; i < result.length; i++) {
     if (Array.isArray(result[0])) {
      for (let j = 0; j < result[i].length; j++) {
       if (result[i][j] !== testArray[i][j]) {
        console.log(result[i][j], testArray[i][j]);
        passed = false;
       }
      }
     } else {
      if (result[i] !== testArray[i]) {
        console.log(result[i], testArray[i])
        passed = false;
      };
     }  
    }
   }
    
    
    if (passed) {
     status = "Passed"
    } else status = "Failed"
    console.log( `${status}. ${test.arg} produced ${result} and the expected was ${test.expected}`)
   
  })
 }

 testThreeSum();