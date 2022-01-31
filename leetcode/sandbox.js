var addBinary = function(a, b) {
   let sum = []
   let carry = 0;
   for (let i = Math.max(a.length -1,b.length -1); i >= 0; i--) {
    if (a[i] && b[i]) {
     if (a[i] == 0 && b[i] == 0 && carry == 0) sum.unshift('0');

     if (a[i] == 1 || b[i] == 1 && carry == 0) sum.unshift('1');

     
     if (a[i] == 0 && b[i] == 0 && c == 1) {
       sum.unshift('1');
       c = 0;
     }
     if (a[i] == 1 || b[i] == 1 && c == 0) sum.unshift('1');
     if (a[i] == 1 && b[i] == 1 && c == 1) {
      sum.unshift('1');
      c = 1;
     }
     if (a[i] == 1 && b[i] == 1) sum.unshift('0')
    }

    if (a[i]) {

    }

    if (b[i]) {

    }
   }
   return sum.join('')
};

console.log(addBinary('101', '1'))
console.log(addBinary('111', '1'))
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
