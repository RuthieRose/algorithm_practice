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
    console.log(hash1, hash2)
    let sVals = Object.values(hash1).sort((a,b) => a -b);
    let tVals = Object.values(hash2).sort((a,b) => a -b);
    console.log('hash1', sVals, 'hash2', tVals)
    
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

  let test1 = isIsomorphic('egg', 'add');
  if (test1) console.log('Passed, egg and add are isomorphic');
  else console.log('Failed, expected to be true');

  let test2 = isIsomorphic('foo', 'bar');
  if (test2) console.log('Failed, foo and bar are not isomorphic');
  else console.log('Passed, foo and bar are not isomorphic');

  let test3 = isIsomorphic('paper', 'title');
  if (test3) console.log('Passed, paper and title are isomorphic');
  else console.log('Failed, expected to be true');

  let test4 = isIsomorphic('bbbaaaba', 'aaabbbba');
  if (test4) console.log('Failed, bbbaaaba and aaabbbba are not isomorphic');
  else console.log('Passed, bbbaaaba and aaabbbba are not isomorphic');

  let test5 = isIsomorphic('badc', 'baba');
  if (test5) console.log('Failed, badc and baba are not isomorphic');
  else console.log('Passed, badc and baba are not isomorphic');

  let test6 = isIsomorphic('13', '42');
  if (test6) console.log('Passed, 13 and 42 are isomorphic');
  else console.log('Failed, expected to be true');

}
"badc"
"baba"
console.log(testIsIsomorphic());