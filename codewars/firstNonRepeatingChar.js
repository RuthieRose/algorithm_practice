
function firstNonRepeatingLetter(s) {

 let characters = []
 let doNotAdd = []
 
 if (s === '') return s;

 let charArr = s.toLowerCase().split('')
 charArr.forEach((letter) => {

   if (doNotAdd.includes(letter)) {
    return
   } else if (characters.includes(letter)) {
    let idx = characters.indexOf(letter)
    doNotAdd.push(letter)
    characters.splice(idx, 1)
   } else {
    characters.push(letter)
   }
 })
 if (characters.length === 0) return ''
 let letterToReturn = characters[0]
 let indexToReturn = s.toLowerCase().indexOf(letterToReturn)
 return s[indexToReturn]

}

console.log(firstNonRepeatingLetter('STRess'))