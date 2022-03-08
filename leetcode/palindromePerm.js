
var canPermutePalindrome = function(s) {
    let letters = {};

    for (let i = 0; i < s.length; i++) {
     let letter = s[i];
     if (letters[letter]) delete letters[letter];
     else letters[letter] = 1;
    }

    let result = Object.values(letters);
    if (result.length === 0) return true;
    result = result.reduce((a,b) => a+b)
    if (result > 1) return false;
    else return true;
};

function testCanPermutePalindrome() {
 
 let testCases = [
  {arg: 'code', expected: false},
  {arg: 'aab', expected: true},
  {arg: 'carerac', expected: true},
  {arg: 'aa', expected: true},
 ]

 testCases.forEach(item => {
  let result = canPermutePalindrome(item.arg);
  if (result === item.expected) {
   console.log(`Passed, ${item.arg} is ${item.expected}`)
  } else {
   console.log(`Failed, ${item.arg} is ${item.expected}`)
  }
 })
}

console.log(testCanPermutePalindrome())