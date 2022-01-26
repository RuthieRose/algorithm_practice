var isPalindrome = function(x) {
 if (x < 0) return false
 
 let xStr = x.toString()

 if (xStr.length === 1) return true

 if (xStr.length === 2) {
  if (xStr[0] === xStr[1]) return true
  else return false
 } else {
 
 for (let i = 0; i < Math.floor(xStr.length/2); i++) {
  console.log(xStr[0+i], xStr[(xStr.length - 1) -i])
 
     if (xStr[0+i] !== xStr[(xStr.length - 1) -i]) return false
  }
  return true
 }

};

console.log(isPalindrome(123123))