
var canConstruct = function(ransomNote, magazine) {
    
 let ransomHash = {};
 let magHash = {};

 for (let i = 0; i < ransomNote.length; i++) {
   if (!ransomHash[ransomNote[i]]) {
    ransomHash[ransomNote[i]] = 1;
   } else {
    ransomHash[ransomNote[i]]++
   }
 }


for (let i = 0; i < magazine.length; i++) {
 if (!magHash[magazine[i]]) {
  magHash[magazine[i]] = 1;
 } else {
  magHash[magazine[i]]++
 }
}

console.log(ransomHash, magHash)
let passed = true;
for (let key in ransomHash) {
 if (!magHash[key]) {
  passed = false;
 } else if (ransomHash[key] > magHash[key]) {
  passed = false;
 }
}

return passed;

};

function testCanConstruct() {
 let testCases = [
  {input: ["a", "b"], expected: false},
  {input: ["aa", "ab"], expected: false},
  {input: ["a", "aa"], expected: true},
 ]

 testCases.forEach(test => {

   let result = canConstruct(...test.input);

   if (result === test.expected) {
    console.log('Passed')
   } else {
    console.log(`Failed. Expected result was ${test.expected} and the result was ${result}`)
   }
 })
}

testCanConstruct()