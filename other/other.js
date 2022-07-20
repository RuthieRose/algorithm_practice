// binary string, find number of substrings that start and end with 1
// count number of 1s

function countSubstrings(s) {
   
 let ones = 0;

 for (let i = 0; i < s.length; i++) {
    
    let char = s[i]
    if (char == '1') {
     ones++
    }
   }

   return ones * Math.floor((ones - 1)/2)
}

console.log(countSubstrings('1000101'))
console.log(countSubstrings('10010101'))