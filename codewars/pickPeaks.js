function pickPeaks(arr) {

 let result = { 
  pos: [],
  peaks: []
 }

 arr.map((num, idx) => {
  if (idx != 0 && idx != num.length - 1) {
   if (num > arr[idx - 1] && num > arr[idx + 1]) {
   result.pos.push(idx)
   result.peaks.push(num)
   console.log(result)
   } else if (num > arr[idx - 1] && num === arr[idx + 1]) {
     let i = 1;
     while (num === arr[idx + i] && i < arr.length - idx) {
      i++
     }
     if (num < arr[idx + i]) {
      return
     } else if (num > arr[idx + i] && !result.pos.includes(idx)) {
       result.pos.push(idx)
       result.peaks.push(num)
       console.log('nested if', result)
      }
    
   } 
  } 
 })
 return result
}

console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))