var containsNearbyDuplicate = function(nums, k) {
    let indeces = {};

    for (let i =0; i < nums.length; i++) {
     if (indeces[nums[i]]) indeces[nums[i]].push(i);
     else indeces[nums[i]] = [i]
    }

    let indecesVals = Object.values(indeces);

    let nearby = false;

    indecesVals.forEach (item => {
     for (let i = 0; i < item.length; i++) {
     if ((item[i + 1]) - item[i] <= k) nearby = true;
     }
    })

    return nearby;
};

const testContainsDuplicate = () => {
 let testCases = [
  {tests: [[1,2,3,1], 3], expected: true}, 
  {tests: [[1,0,1,1], 1], expected: true},
  {tests: [[1,2,3,1,2,3], 2], expected: false},
 ]
 
 testCases.forEach(item => {
  let args = item.tests;
  let didItPass = containsNearbyDuplicate(...args) === item.expected;

  if (didItPass) console.log('Passed')
  else console.log('Failed')
  console.log(
   `${args} expected to be ${item.expected}`
  )
 })

}

console.log(testContainsDuplicate())