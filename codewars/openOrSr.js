function openOrSenior(data) {
 // senior must be at least 55
 // senior must have handicap greater than 7

 let output = []

 data.forEach(arr => {
  if (arr[0] >= 55 && arr[1] > 7) output.push("Senior");
  else output.push("Open")
 })

 return output;
}

var plusOne = function(digits) {
 
 let i = digits.length - 1;

 if (digits[i] !== 9) {
  digits[i] += 1;
  } else {
   if (digits[i] === 9) {
    while (digits[i] === 9 && i !== 0) {
     digits[i] = 0;
     i--
    }
    if (digits[i] === 9 && i === 0) {
     digits[i] = 0;
     digits.unshift(1)
    } else {
     if (digits[i] !== 9) {
      digits[i] += 1;
      }
    }
    
   }
  }
 return digits;
};

console.log(plusOne([1,2,4]))