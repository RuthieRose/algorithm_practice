var addDigits = function(num) {
    let numString = num.toString();

    if (numString.length === 1) return num;

    else {
     numArray = numString.split('');
     num = numArray.reduce((a,b) => +a + +b)
    }

    return addDigits(num)

};

function testAddDigits() {
 
 let testCases = [
  {arg: 38, expected: 2},
  {arg: 0, expected: 0},
  {arg: 1157, expected: 5}
 ]

 testCases.forEach(item => {
  let result = addDigits(item.arg);
  if (result === item.expected) {
   console.log(`Passed, ${item.arg} reduces to ${item.expected}`)
  } else {
   console.log(`Failed, ${item.arg} reduces to ${item.expected}`)
  }
 })
}

console.log(testAddDigits())