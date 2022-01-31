function alphabetPosition(text) {
 let str = ''
 for (let i = 0; i < text.length; i++) {
  let workingChar = text.charCodeAt(i);
  if (workingChar > 96) workingChar -= 96;
  else workingChar -= 64;
  if (workingChar >= 1 && workingChar < 27) {
   str += workingChar += ' ';
  }
 }
 return str.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))