var scoreOfParentheses = function(s) {
    
 let stack = [];

 let score = 0;

 for (let i = 0; i < s.length; i++) {
  if (s[i] === '(') {
   console.log(stack, score)
   stack.push(score);
   score = 0;
  } else {
   console.log(stack, score)
   score = stack.pop() + Math.max(1, score*2)
  }
 }

 return score;
};

function testScore() {
 let testCases = [
  {input: '()', expected: 1},
  {input: '(())', expected: 2},
  {input: '()()', expected: 2},
  {input: '(()(()))', expected: 6},
  {input: '((()()))', expected: 8},
 ]

 testCases.forEach( test => {
  let result = scoreOfParentheses(test.input);

  if (result === test.expected) {
   console.log(`Passed. ${test.input} equalled ${test.expected}`) 
  } else {
    console.log(`Failed. ${test.input} expected to equal ${test.expected} and the result was ${result}`)
   }
 })
}
console.log(testScore())