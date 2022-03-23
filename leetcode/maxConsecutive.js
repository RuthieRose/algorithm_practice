var findMaxConsecutiveOnes = function(nums) {
    
   let max = 0;
   let curr = 0;

   for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
     curr++;
     max = Math.max(max, curr);
    } else {
     curr = 0;
    }
   }

   return max;
};

function testFindMax() {

 let testCases = [
  {input: [1,1,0,1,1,1], expected: 3},
  {input: [1,0,1,1,0,1], expected: 2},
 ]

 testCases.forEach(item => {
  let result = findMaxConsecutiveOnes(item.input);

  if (result === item.expected) {
   console.log(`Passed. ${item.input} resulted in ${item.expected}`)
  } else {
   console.log(`Failed. ${item.input} resulted in ${result} and ${item.expected} was expected.`)
  }
 })
}

console.log(testFindMax());