var wordPattern = function(pattern, s) {

 let patternArray = pattern.split('');
 let sArray = s.split(' ');
 let keyMap = {};
 
 
 let key = Array.from(new Set(patternArray));
 let vals = Array.from (new Set(sArray));

 console.log(key, vals)

 if (key.length !== vals.length || patternArray.length !== sArray.length) return false;

 for (let i = 0; i < key.length; i++) {
   keyMap[key[i]] = vals[i]
 }
 console.log(keyMap)
 
 for (let i = 0; i < patternArray.length; i++) {
  if (keyMap[patternArray[i]] !== sArray[i]) return false;
 }
 
 return true;
    
};

function testWordPattern() {
 
 let testCases = [
  {arg: ['abba', "dog cat cat dog"], expected: true},
  {arg: ['abba',  "dog cat cat fish"], expected: false},
  {arg: ['aaaa', "dog cat cat dog"], expected: false},
  {arg: ['aba', "cat cat cat dog"], expected: false},
  {arg: ['aba', "dog cat cat"], expected: false},
 ]

 testCases.forEach(item => {
  let args = [...item.arg]
  console.log(args)
  let result = wordPattern(...args);
  if (result === item.expected) {
   console.log(`Passed, ${args} is ${item.expected} and the result is ${result}`)
  } else {
   console.log(`Failed, ${args} is ${item.expected} and the result is ${result}`)
  }
 })
}

testWordPattern();