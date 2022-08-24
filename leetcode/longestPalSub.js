

var longestPalindrome = function(s) {

  if (s.length === 1) return s
  let matrix = []
  let longestPal = ''
  let maxString = 0
  let maxJ
  
  let reverse = s.split('').reverse().join('')
  
  for (let i = 0; i < reverse.length; i++) {
      let row = []
      let char = reverse[i]
      for (let j = 0; j < s.length; j++) {
          let sChar = s[j]
          
          if (char !== sChar) {
              row.push(0)
          }
          else {
              let num
              if (i > 0 && j > 0) num = matrix[i-1][j-1]
              else num = 0
              num++
              row.push(num)
              maxString = Math.max(maxString, num)
              if (maxString === num) {
                  maxJ = j
              }
          }
      }
      matrix.push(row)
  }
  console.log(matrix)
  for (let i = maxString; i > 0; i--) {
      longestPal += s[maxJ]
      maxJ--
  }
  
  return longestPal
};

console.log(longestPalindrome('bab'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('aparadar'))
console.log(longestPalindrome("aacabdkacaa"))