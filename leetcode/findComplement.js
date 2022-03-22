var findComplement = function(num) {
 let binaryNum = num.toString(2);
 let complement = '';
 
 for (let i = 0; i < binaryNum.length; i++) {
     let char;
     if (binaryNum[i] == 1) char = '0';
     else if (binaryNum[i] == 0) char = '1';
     complement += char;
 }
 
 return parseInt(complement, 2);
};

function testComplement() {
 let testCases = [
  {input: 5, expected: 2},
  {input: 1, expected: 0}
 ]

 testCases.forEach(item => {
  let result = findComplement(item.input);

  if (result === item.expected) {
   console.log(`Passed. ${item.input} expected result is ${item.result}`)
  } else {
   console.log(`Failed. ${item.input} expected result is ${item.result}`)
  }
 })
}

testComplement();