// https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(n) {
    let nBit = n.split('');
    let count = 0;

    while (nBit.length > 0) {
      let char = nBit.shift();
      if (char == 1) {
       count++
      }
    }

    return count;
};

var hammingWeight = function(n) {
  return n.toString(2).split('').reduce((a,b) => +a + +b)
};