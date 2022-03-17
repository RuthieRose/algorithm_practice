var fizzBuzz = function(n) {
 let buzzer = [];
 
 for (let i = 1; i <= n; i++) {
     if (i % 15 === 0) buzzer.push("FizzBuzz");
     else if (i % 5 === 0) buzzer.push("Buzz"); 
     else if (i % 3 === 0) buzzer.push("Fizz"); 
     else buzzer.push(i.toString());
 }

 return buzzer;
};