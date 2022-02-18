const generate = (row) => {
 let triangle = [];

 const makeRow = () => {
  let length = triangle.length;
  if (triangle.length === 0) {
   triangle.push([1]);
  } else if (triangle.length === 1) {
   triangle.push([1,1]);
  } else {
   let working = [1];
   for (let i = 0; i < triangle[length-1].length -1; i++) {
     working.push(triangle[length - 1][i] + triangle[length-1][i+1]);
   }
   working.push(1);
   triangle.push(working);
  }
 }

 for (let i = 0; i <= row; i++) {
  makeRow();
 }
 return triangle[row];
}

console.log(generate(3))