function findAll(n,k) {

 let start = ''
 let top = '';
 let count = 0
 let minAnswer = 0
 let maxAnswer = 0
 
 let answers = []

 // get combinations of numbers that add up to n

 const getDigits = () => {
   let nums = [0,1,2,3,4,5,6,7,8,9]
   let workingArr = []
   for (let i = 0; i < k; i++) {
    for (let j = 0; j < 10; j++) {
     
    }
   }
 }

 // get range
 for (let i = 0; i < k; i++) {
  top += '9'
 }
 
 start = parseInt(top.slice(1)) + 1
 top = parseInt(top)

 // sum of digits is n helper function
 const sumDig = arr => {
  if (arr.reduce((a,b) => a+b) === n) return true 
 }

 // digits have equal or increasing value helper function
 const sortDig = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
   if (arr[i] > arr[i + 1]) {
    return false
   }
  }
  return true
 }
 
 for (let i = start; i <= top; i++) {
 // break into individual digits then sum and compare
  let currNum = i
  let currNumStr = currNum.toString()
  let currArr = []
  for (let j = 0; j < currNumStr.length; j++) {
  currArr.push(parseInt(currNumStr[j]))
 }
  if (sumDig(currArr)) {
   if (sortDig(currArr)) {
    count++
    if (minAnswer === 0) {
     minAnswer = currNum
    }
    maxAnswer = currNum
   }
  }
 }

 if (count === 0) return []

 // return an array of number of answers, the min answer and the max answer
 return [count, minAnswer.toString(), maxAnswer.toString()]

}

console.log(findAll(10,3))