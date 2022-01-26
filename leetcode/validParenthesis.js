const validParenthesis = s => {
    
   let brackets = {
    '(':')',
    '{':'}',
    '[':']'
   }

   let open = [];

   for (let char of s) {
    if (brackets[char]) {
     open.push(brackets[char])
     console.log(open)
    } else {
     if (open.pop() !== char ) return false
    }
   }
  return (!open.length)
}

console.log(validParenthesis("([{([])}])"));






