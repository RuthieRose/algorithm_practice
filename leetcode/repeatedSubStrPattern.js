

var repeatedSubstringPattern = function(s) {

  return s.repeat(2).slice(1,-1).includes(s);

};



function testPattern() {

 let testCases = [
  {input: "abab", expected: true},
  {input: "aba", expected: false},
  {input: "abcabcabcabc", expected: true},
  {input: "a", expected: false},
  {input: "abaababaab", expected: true},
  {input: "abac", expected: false},
  {input: "aa", expected: true},
  {input: "ababababab", expected: true},

 ];
 
 testCases.forEach(set => {
  
  let input = set.input;
  let result = repeatedSubstringPattern(input);
  
  if (result === set.expected) {
   console.log(`Passing. ${input} resulted in ${result}`)
  } else {
   console.log(`Failed. ${input} resulted in ${result} and the 
   expected was ${set.expected}`)
  }

})
}

console.log(testPattern())

// if (s.length === 1) return false;

// let substring = '';

// for (let i = 0; i < Math.floor(s.length/2); i++) {
//   substring += s[i];
//   let allTrue = true;

//   for (let j = 0; j < s.length; j++) {
//    let pointer = j % substring.length;
//    if (s[j] !== substring[pointer]) {
//     allTrue = false;
//    }
//   }

//   if (allTrue && s.length % substring.length === 0) {
//    return true;
//   }

// }

// return false;