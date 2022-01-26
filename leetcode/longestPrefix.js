const longestCommonPrefix = strs => {

let count; 
let word1Length = strs[0].length;
let prefix = ''
  
 for (let i = word1Length; i > 0; i--) {
  count = 0
  strs.forEach(word => {
    if (word.substr(0,i) === strs[0].substr(0,i)) {
     count++
    } 
   })

  if (count === strs.length) {
   prefix = strs[0].substr(0,i)
   return prefix;
  }

 }
 return prefix;
}


let array = ['flight', 'flask', 'flair', 'flat'];

console.log(longestCommonPrefix(array));