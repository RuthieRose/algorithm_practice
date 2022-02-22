
const getSpiralDiagonals = () => {
 let diagonalNumbers = [1];

 // start with 1
 // go up to (inclusive) 1,002,001
 // for four rounds add 2
 // after four rounds add 4
 // after four rounds add 6
 // this continues until 1,002,001
 
 let num = 1;
 let adder = 2;
 let count = 0;

 while (num < 1002001) {
  num += adder;
  diagonalNumbers.push(num);
  count++
  if (count === 4) {
   count = 0;
   adder += 2
  }
 }

 return diagonalNumbers.reduce((a,b) => a+b);
}

console.log(getSpiralDiagonals())