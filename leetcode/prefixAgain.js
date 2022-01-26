var longestCommonPrefix = function(strs) {
 if (strs[0] === '') return ''
 if (strs.length === 1) return strs[0]
    
 let common = ''
 let finished = 0
 let i = 0
 // find a way to grab each letter
 // test each respective letter at that position in the array
 // if each one matches then add it to the common
 // when it doesn't return common
 
while (finished === 0) {
     let letter = strs[0][i]
     if (strs.every(str => str[i] === letter)) {
        common += letter
        if (common.length == strs[0].length) {
          finished = 1
        } else i++
        
      } else {
       finished = 1
      }
    }
 
 return common
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))