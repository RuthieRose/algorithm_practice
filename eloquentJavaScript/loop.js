
let val = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let sing = []

function test(item) {
 if (item % 2 === 0) return false;
 if (item % 3 === 0) return false;
 if (item % 5 === 0) return false;
 return true
}

function body(item) {
 return item.toString();
}

function update(item, arr) {
 arr.push(`If you're happy and you know it sing ${item} times!`) 
}

function loop(val, test, update, body) {

 for (item in val) {
  let result = test(item);
  
  if (result) {
   let getItem = body(item); 
   update(getItem, sing);
  }
  
 }
 return sing;
}



console.log(loop(val, test, update, body))