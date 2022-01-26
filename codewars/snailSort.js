/**
 * n x n array
 * traverse the elements clockwise going in a spiral
 * arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]] will return [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * [1,2,3,6,9,8,7,4,5]
 */


snail = function(array) {

 // edge case
 if (array[0].length === 0) {
  return []
 }
 // determine the number of nested arrays
 let num = array.length;
 console.log(num)

 let snailArr = []

  // helper function

 const getSpiral = arr => {
  
  if (num === 1) return snailArr
  // Length is array.length - 1

  // push first line excluding last element: Loop 1

  for (let i = 0; i < array.length - 1 ; i++) {
    snailArr.push(arr[0][i])
  }
  console.log('push first line excluding last elem', snailArr)

  // push last elem of arr.length - 1 lines: Loop 2

   for (let i = 0; i < array.length - 1; i++) {
    snailArr.push(arr[i][array.length - 1])
   }
  console.log('push last elem', snailArr)

  // push last array in reverse - last elem: Loop 3
  for (let i = arr.length - 1; i > 0; i--) {
   snailArr.push(arr[array.length - 1][i])
  }

  console.log('push last array in reverse', snailArr)

  // Start recursion with this loop when refactoring? 
  // first num of inside arrays: Loop 4 
  // Length is array.length - 2

   for (let i = array.length - 1; i > 1; i--) {
    snailArr.push(arr[i][0])
   } 
  console.log('push first num of inside arrays', snailArr)


  // Loop 5
  
  for (let i = 0; i < array.length - 2; i++) {
    snailArr.push(arr[1][i])
  }
  console.log('Loop 5', snailArr)

  // Length is array.length - 3
  // Loop 6

   for (let i = 1; i < arr.length - 2; i++) {
     snailArr.push(arr[i][arr.length - 2])
   }
   console.log('Loop 6', snailArr)

// Recursion Loop #2?? with this loop when refactoring? 
 // Loop 7
   
   for (let i = arr.length - 2; i > 1; i--) {
     snailArr.push(arr[arr.length - 2][i])
   }
   console.log('Loop 7', snailArr)
 

 // Loop 8

 for (let i = arr.length - 2; i >= 2; i--) {
   snailArr.push(arr[i][arr.length - (arr.length - 1)])
 }
 console.log('Loop 8', snailArr)

 // Loop 9
 // 2 can also be arr.length - 4
 // i can also start at arr.length - 5

 for (let i = 1; i < arr.length - 3; i++) {
   snailArr.push(arr[2][i])
 }

 console.log('Loop 9', snailArr)


// start new recursive loop? 
// Loop 10

for (let i = arr.length - 4; i < arr.length - 3; i++) {
  snailArr.push(arr[arr.length - 4][arr.length - 3])
}

console.log('Loop 10', snailArr)


// Loop 11

for (let i = arr.length - 3; i < arr.length - 2; i++) {
  snailArr.push(arr[i][i])
}

console.log('Loop 11', snailArr)

// Loop 12

for (let i = arr.length - 3; i < arr.length - 2; i++) {
  snailArr.push(arr[i][arr.length - 4])
}

console.log('Loop 12', snailArr)
 }
 getSpiral(array)
 return snailArr;

}

// console.log(snail([[1,2],[3,4]]))
// console.log(snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(snail([[]]))
console.log(snail([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]]))