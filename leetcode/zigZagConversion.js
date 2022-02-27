var convert = function(s, numRows) {

 if (s.length === 1) return s;

 if (numRows === 1) return s;
 
 let rows = {
  1: ''
 };

 let createRows = numRows => {
   for (let i = 1; i <= numRows; i++) {
    rows[i] = ''
   }
 }

 createRows(numRows);
 
 let sArr = s.split('');
 let rowKeys = Object.keys(rows);
 let zigZagKeys = [...rowKeys];

 while (zigZagKeys.length < s.length) {
  zigZagKeys.push(...rowKeys.reverse().slice(1));
  zigZagKeys.push(...rowKeys.reverse().slice(1));
 }

 for (let i = 0; i < s.length; i++) {
  let letter = sArr.shift();
  let zigZagKey = zigZagKeys.shift();
  rows[zigZagKey] += letter;
 }

 return Object.values(rows).join('')

};

console.log(convert('AB', 1))