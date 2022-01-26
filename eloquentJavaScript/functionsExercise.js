let min = (one, two) => one >= two ? two : one;

let isEven = num => {
 if (num === 0) return true;
 if (num === 1) return false;
 if (num < 0) return undefined;
 
 return isEven(num - 2);
}

let countChar = (str, char) => {
 let count = 0
 for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
   count++
  }
 }
 return count;
}
console.log(countChar('facebook', 'o'));
