var reverseBits = function(n) {
 let nArr = n.toString(2).split('').reverse();
 let nAddLen = 32 - nArr.length;
 for (let i = 0; i < nAddLen; i++) {
     nArr.push('0');
 }
 return parseInt(nArr.join(''), 2)
};