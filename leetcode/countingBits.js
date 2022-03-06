
var countBits = function(n) {

 let nBits = [0,1];

  function getBits(n) {

   let nStr = n.toString(2).split('').reduce((a,b) => +a + +b)

  nBits.push(nStr)

  }

 for (let i = 2; i <= n; i++) {
  getBits(i)
 }
  
 return nBits;
}

console.log(countBits(5))