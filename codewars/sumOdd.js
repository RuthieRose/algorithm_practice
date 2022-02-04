function rowSumOddNumbers(n) {
  let triangle = [];
  let oddNums = 1;
	 for (let i = 0; i < n; i++) {
   let row = [];
   let count = 0;
   while (count <= i) {
    row.push(oddNums);
    count++;
    oddNums += 2;
   }
   triangle.push(row);
  }
  console.log(triangle)
  return triangle[n-1].reduce((a,b) => a+b)
}

console.log(rowSumOddNumbers(42))