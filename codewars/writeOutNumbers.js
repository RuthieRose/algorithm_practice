// Create a function that transforms any positive number to a string representing the number in words. Function should work for all numbers between 0 and 999999

function number2words(n){
 // works for numbers between 0 and 999999   
 // need a dictionary
 // need to account for place value (how? length?)
 
 if (n < 0) return "Not in bounds, try again"

 let word = []

 let numbers = {
  0: 'zero',
  1: 'one',
  2: 'two', 
  3: 'three', 
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
 }

 let nAsString = n.toString()

 if (n < 10) return numbers[nAsString]

 let lastTwo = nAsString[nAsString.length - 2]+ nAsString[nAsString.length - 1]
 lastTwoNum = +lastTwo
 
 if (lastTwoNum < 10 && lastTwoNum > 0) word.push(numbers[lastTwo[1]])
 else if (lastTwoNum < 21 || lastTwoNum === 30 || lastTwoNum === 40 || lastTwoNum === 50 || lastTwoNum === 60 || lastTwoNum === 70 || lastTwoNum === 80 || lastTwoNum === 90 ) word.push(numbers[lastTwo])
 else {
  let lastNum = nAsString[nAsString.length - 1]
  let tens = lastTwo - lastNum
  tens = tens.toString()
  ones = lastNum.toString()
  word.push(`${numbers[tens]}-${numbers[ones]}`)
 }
 if (n < 100) return word[0]

 // add in hundreds
 let nHundreds = nAsString[nAsString.length - 3]
 if (nHundreds != 0) word.unshift(`${numbers[nHundreds]} hundred `)
 if (n < 1000) return word.join('').trim()

 // thousands & ten thousands
 

 let tenThousands;

 if (nAsString[nAsString.length - 4] === '0' && nAsString[nAsString.length - 5] === '0') { word.unshift(`thousand `)}
 else if (nAsString.length === 4 || nAsString[nAsString.length - 5] === '0') {
  tenThousands = nAsString[nAsString.length - 4]
  console.log(tenThousands)
 } else {
  tenThousands = nAsString[nAsString.length - 5]+ nAsString[nAsString.length - 4]
 }
 tenThousandsNum = +tenThousands
 
 if (tenThousandsNum < 10 && tenThousandsNum > 0) {
  word.unshift(`${numbers[tenThousands]} thousand `)

 } else if (tenThousandsNum === 30 || tenThousandsNum === 40 || tenThousandsNum === 50 || tenThousandsNum === 60 || tenThousandsNum === 70 || tenThousandsNum === 80 || tenThousandsNum === 90 ) {
  word.unshift(`${numbers[tenThousandsNum]} thousand `)

 } else if (tenThousandsNum < 21 && tenThousandsNum > 0) {
  word.unshift(`${numbers[tenThousandsNum]} thousand `)

 } else if (tenThousandsNum > 20) {
  let oneThousand = nAsString[nAsString.length - 4]
  let tenThousand = tenThousandsNum - +oneThousand
  tenThousandStr = tenThousand.toString()
  oneThousandStr = oneThousand.toString()
  word.unshift(`${numbers[tenThousandStr]}-${numbers[oneThousandStr]} thousand `)
 }
 if (n < 100000) return word.join('').trim()

 // hundred thousands

 let hundredThousand = nAsString[0]
 word.unshift(`${numbers[hundredThousand]} hundred `)
 return word.join('').trim()
}



console.log(number2words(50656))

