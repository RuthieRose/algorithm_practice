var intToRoman = function(num) {

  let roman = []

  while (num >= 1000) {
    num -= 1000;
    roman.push('M')
  }

  if (num >= 900) {
    num -= 900;
    roman.push('CM')
  }

  if (num >= 500) {
   num -= 500;
   roman.push('D')
  }

  if (num >= 400) {
   num -= 400;
   roman.push('CD')
  }

  while (num >= 100) {
   num -= 100;
   roman.push('C')
  }

  if (num >= 90) {
   num -= 90;
   roman.push('XC')
  }

  if (num >= 50) {
   num -= 50;
   roman.push('L')
  }

  if (num >= 40) {
   num -= 40;
   roman.push('XL')
  }

  while (num >= 10) {
   num -= 10;
   roman.push('X')
  }

  if (num >= 9) {
   num -= 9;
   roman.push('IX')
  }

  if (num >= 5) {
   num -= 5;
   roman.push('V')
  }

  if (num >= 4) {
   num -= 4;
   roman.push('IV')
  }

  while (num >= 1) {
   num -= 1;
   roman.push('I')
  }

  return roman.join('')

};

console.log(intToRoman(3))
console.log(intToRoman(58))
console.log(intToRoman(1994))