function validBraces(braces) {

 let braceMap = {
  '(':')',
  '[':']',
  '{':'}'
 }

 let expected = [];

 for (let i = 0; i < braces.length; i++) {
   let key = braces[i]
   if (braceMap[key]) {
    expected.push(braceMap[key])
   } else if (braces[i] !== expected.pop()) {
    return false;
   }
 }
 if (expected.length ===0 ) return true;
 else return false;
}

console.log(validBraces('[(])'))