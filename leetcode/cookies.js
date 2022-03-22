var findContentChildren = function(g, s) {

 if (s.length === 0) return 0;
 
 let count = 0;
 
 greed = g.sort((a,b) => a - b);
 cookies = s.sort((a,b) => a - b);

 while (greed.length > 0 && cookies.length > 0) {
     
     while (greed[0] <= cookies[0]) {
       greed.shift();
       cookies.shift();
       count++;
     }

     if (cookies[0] < greed[0]) {
       cookies.shift();
     }

 } 
 
 return count;
};

function testCookies() {

 let testCases = [
  {input: [[1,2,3],[1,1]], expected: 1},
  {input: [[1,2],[1,2,3]], expected: 2},
  {input: [[10,9,8,7],[5,6,7,8]], expected: 2},
  {input: [[1,2,3],[3]], expected: 1}
 ];
 
 testCases.forEach(set => {
  
  let input = set.input;
  console.log(input)
  let result = findContentChildren(...input);
  
  if (result === set.expected) {
   console.log(`Passing. Resulted in ${result}`)
  } else {
   console.log(`Failed. Resulted in ${result} and the 
   expected was ${set.expected}`)
  }

})
}

console.log(testCookies())