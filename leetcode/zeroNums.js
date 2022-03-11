var moveZeroes = function(nums) {
 if (nums.every(num => num === 0)) return nums;
 if (nums.indexOf(0) === -1) return nums;

let numZeroes = nums.filter(num => num === 0);
numZeroes = numZeroes.length;

 while (nums.indexOf(0) < nums.length - numZeroes) {
   for (let j = 0; j < nums.length -1; j++) {
    if (nums[j] === 0) {
  
     [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
    }
   }
 
}
 console.log(nums)
 return nums;
 
};

let testMoveZeroes = () => {
 let testCases = [
  {arg: [0,1,0,3,12], expected: [ 1, 3, 12, 0, 0 ]},
  {arg: [1,0,0,1], expected: [ 1, 1, 0, 0 ]},
  {arg: [0,0,1], expected: [1,0,0]},
  {arg: [0, 1,3,12], expected: [ 1, 3, 12, 0]},
  {arg: [0,0,0,0,0,0,1,1,1], expected: [1,1,1,0,0,0,0,0,0]}
 ]

 testCases.forEach(item => {
  let result = moveZeroes(item.arg);

  let pass = true;

  if (result.length !== item.expected.length) {
   pass = false;
  } else 
  {
   for (let i = 0; i < result.length; i++) {
    if (result[i] !== item.expected[i]) {
     pass = false;
    }
  }
 }

 console.log(`Pass = ${pass}. The result is ${result}. Expected result is ${item.expected}`)
 })
}

testMoveZeroes();