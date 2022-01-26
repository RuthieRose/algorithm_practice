function arrayToList(arr) {

 let list = {};
 let workingList = list;
 for (let i = 0; i < arr.length-1; i++ ) {
  workingList.value = arr[i];
  workingList.rest = {};
  workingList = workingList.rest;
 }
 workingList.value = arr[arr.length - 1];
 workingList.rest = null;
 return list;
}

let list = arrayToList([1,2,3])

// helper function 

function prepend(elem, currList) {
 let newList = {
  value: elem,
  rest: currList
 }
 return newList
}

function nth(list, idx) {
 if (idx === 0) return list;
 else return nth(list.rest, idx - 1);
}

let result = prepend(7, list);
console.log(nth(result, 2))