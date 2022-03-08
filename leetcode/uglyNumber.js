var isUgly = function(n) {

  if (n === 0) return false;

  while (n % 2 === 0) {
   n /= 2;
  }

  while (n % 3 === 0) {
   n /= 3;
  }

  while (n % 5 === 0) {
   n /=5;
  }

  if (n === 1) return true;
  else return false;

};

function testIsUgly() {
 
 let testCases = [
  {arg: 6, expected: true},
  {arg: 1, expected: true},
  {arg: 14, expected: false},
  {arg: 0, expected: false}
 ]

 testCases.forEach(item => {
  let result = isUgly(item.arg);
  if (result === item.expected) {
   console.log(`Passed, ${item.arg} is ${item.expected}`)
  } else {
   console.log(`Failed, ${item.arg} is ${item.expected}`)
  }
 })
}

console.log(testIsUgly())