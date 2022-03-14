var intersect = function(nums1, nums2) {

 nums1 = nums1.sort((a,b) => a-b);
 nums2 = nums2.sort((a,b) => a-b);


 let intersection = [];
 
 let num1 = nums1.shift();
 let num2 = nums2.shift();

 while (num1 !== undefined && num2 !== undefined) {
   
     if (num1 === num2) {
         intersection.push(num1);
         num1 = nums1.shift();
         num2 = nums2.shift();
     }
     
     if (num1 > num2) {
         num2 = nums2.shift();
     }
     
     if (num2 > num1) {
         num1 = nums1.shift();
     }
 }
 
 return intersection;
};

const testIntersect = () => {

 let testCases = [
  {tests: [[4,7,9,7,6,7],
   [5,0,0,6,1,6,2,2,4]], expected: [4,6]}, 
  {tests: [[1,2,2,1],
    [2,2]], expected: [2,2]},
  {tests: [[4,9,5],
   [9,4,9,8,4]], expected: [4,9]},

 ]
 
 testCases.forEach(item => {
  console.log(item.tests[0])
  let result = intersect(item.tests[0], item.tests[1]);
  let didItPass = true;

  for (let i = 0; i < item.expected.length; i++) {
   if (result[i] !== item.expected[i]) {
    didItPass = false;
   }
  }

  if (didItPass) console.log('Passed')
  else console.log('Failed')
  console.log(
   `${item.tests[1]} expected to be ${item.expected}`
  )
 })

}

console.log(testIntersect());