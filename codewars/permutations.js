
 // let factorial = (start) => {
 //  if (start === 0) {
 //   return 1
 //  } else {
 //   return start * factorial( start - 1)
 //  }
 // }

 // let factorialCount = factorial(count)

function permutations(string) {

 const strArr = string.split('')
 console.log(strArr)
 
 let resultArr = [];

 const swap = (arr, indexA, indexB) => {
  let temp = arr[indexA]
  arr[indexA] = arr[indexB]
  arr[indexB] = temp
 }

 let iterate = (n, heapArr) => {
  if (n === 1) {
   resultArr.push(heapArr.slice())
   return;
  }

  iterate(n - 1, heapArr)

  for (let i = 0; i < n - 1; i++) {
   if (n % 2 === 0) {
    swap(heapArr, i, n-1)
   } else {
    swap(heapArr, 0, n-1)
   }
   iterate(n - 1, heapArr)
  }
 }

  iterate(strArr.length, strArr.slice())
  let resultSet = [];
  resultArr.forEach(item => resultSet.push(item.join('')))
  let result = new Set(resultSet)

  let array = Array.from(result)

  return array;
 }

console.log(permutations('defg'))

/*

abc 
bca
cab
acb
bac
cba

3*2



*/