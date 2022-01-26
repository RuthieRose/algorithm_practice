


const qSort = (arr) => {
 if (arr.length <= 1) {
  return arr;
 }

 let [pivot, ...rest] = arr;
 const left = []
 const right = []

 rest.forEach( elem => elem < pivot ? left.push(elem) : right.push(elem))

 return qSort(left).concat(pivot).concat(qSort(right))
}

console.log(qSort([5,2,7,9,6,1,4,5,0]))

