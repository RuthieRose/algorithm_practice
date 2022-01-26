var lengthOfLastWord = function(s) {
 // string s has words separated by spaces
 // return the length of the last word in the string
 
 let sArr = s.split(' ')
 sArr = sArr.filter(item => item !== '')
 console.log(sArr)
 let sLength = sArr.length
 return sArr[sLength - 1].length
    
};

console.log(lengthOfLastWord("luffy is still joyboy"))