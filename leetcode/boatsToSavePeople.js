
var numRescueBoats = function(people, limit) {
  
    if (people.length === 1) return 1;

    let boats = 0;
    people = people.sort((a,b) => a - b);
     
    while (people.length > 1) {

      if (people[people.length - 1] + people[0] > limit) {
       people.pop()
       boats++;
      } else {
       people.shift()
       people.pop();  
       boats++
      }
    }
    if (people.length > 0) boats++;
    return boats;

};

function testRescueBoats() {

 let testCases = [
  {input: [[2,2],6], expected: 1 },
  {input: [[1,2],3], expected: 1 },
  {input: [[3,2,2,1],3], expected: 3 },
  {input: [[3,5,3,4],5], expected: 4 },
  {input: [[5,1,4,2],6], expected: 2 },
  {input: [[7,3,2],8], expected: 2 },
 ]

 testCases.forEach(test => {
  let input = test.input;

  let result = numRescueBoats(...input);

  if (result === test.expected) {
   console.log(`Passing. ${test.input} resulted in ${result}`)
  } else {
   console.log(`Failed. ${test.input} resulted in ${result} and the expected was ${test.expected}`)
  }
 })
}

testRescueBoats();