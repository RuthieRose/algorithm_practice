var validateStackSequences = function(pushed, popped) {
 
   let count = 0; 
   let stack = [];

   for (let i = 0; i < pushed.length; i++) {

     stack.push(pushed[i]);

     while (stack.length > 0 && count < popped.length && stack[stack.length - 1] == popped[count]) {
      console.log('stack', stack, 'count', count, 'popped[count]', popped[count])
      stack.pop();
      count++;
     }
   }

   return count === popped.length;
};

function testStack() {

 let testCases = [
  {input: [[2,1,0], [1,2,0]], expected: true},
  {input: [[1,2,3,4,5], [4,5,3,2,1]], expected: true},
  {input: [[1,2,3,4,5], [4,3,5,1,2]], expected: false},
  {input: [[0,2,1], [0,1,2]], expected: true},
  {input: [[1,0,3,2], [0,1,2,3]], expected: true},
 ]

 testCases.forEach(item => {
  let result = validateStackSequences(item.input[0], item.input[1])

  if (item.expected !== result) {
   console.log(`Failed. Expected ${item.input[0]}, ${item.input[1]} to be ${item.expected}`)
  } else console.log(`Passed. The expected result is ${result}`)
 })

}

testStack()