
var isHappy = function(n) {

  let checkNum = [];
  let count = 0;
  let isHappy = false;
  
  function getSquares(n) {
   let getDigits = n.toString().split('');
   console.log(getDigits)
   let num = getDigits.map(num => +num* +num).reduce((a,b) => a + b);
   console.log(num)

   return num;
  }
  
  let num = getSquares(n)

  if (num === 1) isHappy = true;

  while (num !== 1 && checkNum.indexOf(num) === -1) {
   checkNum.push(num);
   num = getSquares(num);
   if (num === 1) isHappy = true;
  }
  
  return isHappy;

};

console.log(isHappy(2))