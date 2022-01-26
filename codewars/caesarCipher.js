let alphaKeyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let alphaKeyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y', 'Z']

function movingShift(s, shift) {

 let newStr = ''

 let inputStr = s.split('')

 for (let i = 0; i < inputStr.length; i++) {
  let current = s[i]
  if (alphaKeyLower.includes(current) === false && alphaKeyUpper.includes(current) === false) {
   newStr += current
  } else if (alphaKeyLower.includes(current)) {
    let currIndex = alphaKeyLower.indexOf(current)
    let shiftedIndex = currIndex += (shift + i)
    if (shiftedIndex > alphaKeyLower.length - 1) {
     shiftedIndex = shiftedIndex % alphaKeyLower.length
    }
    let newLetter = alphaKeyLower[shiftedIndex]
    newStr += newLetter
  } else if (alphaKeyUpper.includes(current)) {
   let currIndex = alphaKeyUpper.indexOf(current)
    let shiftedIndex = currIndex += (shift + i)
    if (shiftedIndex > alphaKeyUpper.length - 1) {
     shiftedIndex = shiftedIndex % alphaKeyUpper.length
    }
    let newLetter = alphaKeyUpper[shiftedIndex]
    newStr += newLetter
  }
 }
 let len;
 if (Math.floor(newStr.length / 5) === newStr.length/5) {
  len = newStr.length/5
 } else if (Math.floor(newStr.length/4) === newStr.length/4) {
  len = Math.floor(newStr.length)/4
 } else if (Math.ceil(newStr.length / 4) - newStr.length % 4 === 1) {
  len = Math.ceil(newStr.length/4)
 } else {
  len = Math.ceil(newStr.length / 5)
 }

 let str1 = ''
 let str2 = ''
 let str3 = ''
 let str4 = ''
 let str5 = ''

 console.log(newStr.length, len)

 for (let i = 0; i < newStr.length; i++) {
  let current = newStr[i]
  if (i >= 0 && i < len) {
   str1+= current
  } else if (i >= len && i < len*2) {
   str2 += current
  } else if (i >= len*2 && i < len*3 ) {
   str3 += current
  } else if (i >= len*3 && i < len*4) {
   str4 += current
  } else {
   str5 += current
  }
 }

 return [str1,str2,str3,str4,str5];
}

function demovingShift(arr, shift) {

 let str = arr.join('')

 let decoded = ''

 for (let i = 0; i < str.length; i++) {
  let current = str[i]
  if (alphaKeyLower.includes(current) === false && alphaKeyUpper.includes(current) === false) {
   decoded += current
  } else if (alphaKeyLower.includes(current)) {
    let currIndex = alphaKeyLower.indexOf(current)
    let shiftedIndex = currIndex -= (shift + i)
    if (shiftedIndex < 0) {
    while (shiftedIndex < 0) {
     shiftedIndex += 26
    }
   }
    let newLetter = alphaKeyLower[shiftedIndex]
    decoded += newLetter
  } else if (alphaKeyUpper.includes(current)) {
   let currIndex = alphaKeyUpper.indexOf(current)
   let shiftedIndex = currIndex -= (shift + i)
    if (shiftedIndex < 0) {
     while (shiftedIndex < 0) {
     shiftedIndex += 26
    }
   }
    let newLetter = alphaKeyUpper[shiftedIndex]
    decoded += newLetter
  }
 }

 return decoded;
}

console.log(movingShift('I should have known that you would have a perfect answer for me!!!', 1))

console.log(demovingShift([
 'J vltasl rlhr z',
 'dfog odxr ypw ',
 'atasl rlhr p g',
 'wkzzyq zntyhv ',
 'lvz wp!!!'
], 1))