// https://stackoverflow.com/questions/9960908/permutations-in-javascript

// Thank you for helping me overcome my issues with permutations and combinations, Stack Overflow!!! <3 

const permutator = inputArr => {
 let result = [];

 const permute = (arr, m = []) => {
     if (arr.length === 0) {
     result.push(m)
     } else {
         for (let i = 0; i < arr.length; i++) {
             let curr = arr.slice();
             let next = curr.splice(i, 1);
             permute(curr.slice(), m.concat(next))
         }
     }
 }

 permute(inputArr)

 return result;
}