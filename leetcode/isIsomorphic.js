var isIsomorphic = function(s, t) {

    if (s.length !== t.length) return false;

    let hash1 = {};
    let hash2 = {};

    for (let i = 0; i < s.length; i++) {
     let charS = s[i];
     let charT = t[i]
     if (hash1[charS]) hash1[charS].push(i);
     else hash1[charS] = [i];
     if (hash2[charT]) hash2[charT].push(i);
     else hash2[charT] = [i];
    }

    let sVals = Object.values(hash1).sort((a,b) => a -b);
    let tVals = Object.values(hash2).sort((a,b) => a -b);
    
    let same = true;

    if (sVals.length !== tVals.length) return false;

    for (let i = 0; i < sVals.length; i++) {
     for (let j = 0; j < sVals[i].length; j++) {
      if (sVals[i][j] !== tVals[i][j]) same = false;
     }
    }

    return same;
};

const testIsIsomorphic = () => {
  let testCases = [
   {tests: ['egg', 'add'], expected: true}, 
   {tests: ['foo', 'bar'], expected: false},
   {tests: ['paper', 'title'], expected: true},
   {tests: ['bbbaaaba', 'aaabbbba'], expected: false},
   {tests: ['badc', 'baba'], expected: false},
   {tests: ['13', '42'], expected: true}
  ]
  
  testCases.forEach(item => {
   let args = item.tests;
   let didItPass = isIsomorphic(...args) === item.expected;

   if (didItPass) console.log('Passed')
   else console.log('Failed')
   console.log(
    `${args} expected to be ${item.expected}`
   )
  })

}

console.log(testIsIsomorphic());