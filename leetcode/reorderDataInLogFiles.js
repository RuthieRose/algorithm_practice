

let array = ["let1 art can", "let2 own kit dig","let3 art zero"]

let sortingIndex = 1;
array.reduce((a,b) => {
 while (a[sortingIndex] === b[sortingIndex] && sortingIndex < a.length) {
  sortingIndex++
 }
})
if (sortingIndex === array[0].length) sortingIndex = 0;

array.sort((a,b) => a[sortingIndex] - b[sortingIndex])

console.log(array)