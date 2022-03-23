var brokenCalc = function(startValue, target) {
    
  let numOperations = 0;

  while (target > startValue) {
   console.log("target,", target, "startValue,", startValue, "numOperations", numOperations);
   numOperations++;
   if (target % 2 === 1) {
    target++;
   } else {
    target /= 2;
   }
  }

  return numOperations + startValue - target;

};

function testBrokenCalc() {
 
 let testCases = [
  {input: [2,3], expected: 2},
  {input: [5,8], expected: 2},
  {input: [3,10], expected: 3},
  {input: [1, 1000000000], expected: 39 },
  { input: [1024, 1], expected: 1023},
  { input: [78, 82], expected: 38},
  {input: [1000000000, 1], expected: 999999999 },
  {input: [9411921, 9411923], expected: 4705961 },
 
 ];

 testCases.forEach(item => {
  let result = brokenCalc(...item.input);

  if (result === item.expected) {
   console.log(`Passing. ${item.input} results in ${item.expected}`)
  } else {
   console.log(`Failed. ${item.input} resulted in ${result} and expected is ${item.expected}`)
  }

 })
}

testBrokenCalc();

