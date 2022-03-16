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