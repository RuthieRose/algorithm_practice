function duplicateEncode(word){

 word = word.toLowerCase();

 let charMap = {}
 let newWord = []

 for (let i = 0; i < word.length; i++) {
  let letter = word[i]

  if (!charMap[letter]) {
    charMap[letter] = 1 
   } else {
    charMap[letter]++
   }
  }
 console.log(charMap)
 
 word = word.split('')

 word.forEach(letter => {
  if (charMap[letter] === 1) {
   newWord.push('(')
  } else {
   newWord.push(')')
  }
 })
 
 return newWord.join('')
}

console.log(duplicateEncode('recede'))