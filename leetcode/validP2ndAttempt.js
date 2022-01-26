var isValid = function(s) {
    
 if (s.length % 2 === 1) return false
    
 let checkString = {
     '(' : ')',
     '{' : '}',
     '[' : ']'
 }
 
 let checkStringKeys = Object.keys(checkString)
 let nextChar = []
 
 for (let i = 0; i < s.length; i++) {
     
     if (!!checkStringKeys.includes(s[i])) {
         nextChar.push(checkString[s[i]])
     } else if (s[i] !== nextChar.pop()) {
      return false
     } 

 }
 if (nextChar.length === 0) return true
 else return false

};

console.log(isValid("({{{{}}}))"))