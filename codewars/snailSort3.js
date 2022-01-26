snail = function(array) {
 let final = []
 
 while(array.length) {
  // take the first array off the top
  final.push(...array.shift())

  console.log('first array shift', final)
  // take the last element from the array on the side
  for (let i = 0; i < array.length; i++) {
    final.push(array[i].pop())
  }
  console.log('right side pop', final)
  // array on bottom in reverse
  final.push(...(array.pop() || []).reverse())
  console.log('last array in reverse', final)
  // first number on the sides
  for (let i = array.length - 1; i >= 0; i--) {
   final.push(array[i].shift())
  }
  console.log('left side shift', final)
 }
 return final
}

// console.log(snail([[1,2],[3,4]]))
// console.log(snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(snail([[]]))
console.log(snail([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]]))