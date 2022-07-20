/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    
  if (s.length === 1) return s;
  
  let valid = {
      '(' : ')',
  }
  
  let stack = [];
  let openi = [];
  let remove = [];
  
  s = s.split('')
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (char === "(") {
          stack.push(")");
          openi.push(i);
      }
      
      else if (char === ")") {
          if (stack.length === 0) remove.push(i);
          else {
              stack.pop();
              openi.pop();         
          };
      }
  }
  
  remove = [...remove, ...openi].sort((a,b) => a-b)
  
  remove.forEach(item => {
      s[item] = ''
  })
  
  return s.join('')

};

// second go-round

var minRemoveToMakeValid = function(s) {
    
    let stack = []
    let returnString = ''
    let openCount = 0
    let closeCount = 0
    let correctCount;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === '(') {
            openCount++
            stack.push(')')
        }
        
        else if (char === ')' && stack.length) {
            closeCount++
            stack.pop(")")
        }
    }
    

    correctCount = Math.min(openCount, closeCount)
    stack = []
    
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === '(' && correctCount > 0) {
            correctCount--
            returnString += char
            stack.push(')')
        }
        else if (char === ')' && stack.length > 0) {
            returnString += char
            stack.pop()
        }
        else if (char !== '(' && char !== ')') returnString += char
    }
    
    return returnString
    
};