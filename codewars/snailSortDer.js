/**
 * n x n array
 * traverse the elements clockwise going in a spiral
 * arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]] will return [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * [1,2,3,6,9,8,7,4,5]
 */


const snail = arr => {

  // edge case
  if (arr[0].length === 0) {
   return []
  }

  let mid = arr.slice(1, arr.length - 1).map(row => row.slice(1, row.length -1 ))

  
  
 return [
  
  arr[0],
  arr.slice(1, arr.length - 1).map(row => row[row.length - 1]),
  arr.length > 1 ? arr[arr.length - 1].reverse() : [],
  arr.slice(1, arr.length - 1).reverse().map(row => row[0]), 
  mid.length > 0 ? snail(mid) : []

 ].flat()
 
 }
 
 console.log(snail([[1,2],[3,4]]))
 console.log(snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
 console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
 // console.log(snail([[]]))
 // console.log(snail([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]]))