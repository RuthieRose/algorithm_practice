//Not currently working

function listSquared(m, n) {

 let numsToCheck = []
 let squaresList = []
 let workingFactors = []
 const reducer = (a,b) => a + b*b;

 const findSqrt = (num, set) => {
  if (set.length !== 0) {
   if (Math.fround(Math.hypot(...set)) === Math.round(Math.hypot(...set))) {
    let sum = set.reduce(reducer, 0)
    squaresList.push([num, sum])
   }
  } else if (num ===1) {
   squaresList.push([1,1])
  }
 }
 

 const getFactors = num => {
  workingFactors = []
  for (let i = 1; i <= Math.floor(num/2); i++) {
    let factor = num/i
    if (Math.floor(factor) === factor && workingFactors.indexOf(factor) === -1) {
     workingFactors.push(factor, i)
    }
  }
  workingFactors = Array.from(new Set(workingFactors))
  findSqrt(num, workingFactors)
 }

 for (let i = m; i <= n; i++) {
  numsToCheck.push(i)
 }
 
 numsToCheck.forEach(num => {
   getFactors(num)
 })

  return squaresList
}

console.log(listSquared(564,7859))
