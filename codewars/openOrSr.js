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