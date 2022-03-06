var myAtoi = function(s) {
 let num = 0;

 sArr = s.trim().split('');
 
 if (sArr[0] !== '-' && sArr[0] !== '+' && sArr[0] !== "0" && sArr[0] !== "1" && sArr[0] !== '2' && sArr[0] !== '3' && sArr[0] !== '4'&& sArr[0] !== '5'&& sArr[0] !== '6'&& sArr[0] !== '7'&& sArr[0] !== '8'&& sArr[0] !== '9' ) {
  return num;
 }

 let positive = true;
 
 if (sArr[0] === '-' || sArr[0] === '+') {
  let char = sArr.shift();
  if (char == '-') {
   positive = false;
  }
 }
 
 let sFilter = '';

 while (sArr.length > 0) {
  let char = sArr.shift();
  if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
   sFilter += char;
  } else {
   break;
  }
 }
 
 if (positive && sFilter.length) {
  num = parseInt(sFilter)
 } else if (!positive && sFilter.length) {
  num = -parseInt(sFilter)
 }
 
 if (num < -(2**31)) {
  return -(2**31)
 } else if (num > 2**31 -1) { 
  return 2**31 -1 
 } else {
  return num;
 }
};

console.log(myAtoi("words and 987"))
console.log(myAtoi("  -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("3.14159"))