

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