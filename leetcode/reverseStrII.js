var reverseStr = function(s, k) {
    
 let chars = [];
 let set = 0;
 let workingArray = [];
 let returnString = [];

 
 for (let i = 0; i < s.length; i++) {
     
     if (i % k === 0) {
         if (i !== 0) {
             chars.push(workingArray);
         }
         workingArray = [];
         workingArray.push(s[i]);
     } else {
         workingArray.push(s[i]);
     }
 }
 
 if (workingArray.length > 0) chars.push(workingArray);
 
 chars.forEach((set, index) => {
     if (index % 2 === 0) {
         returnString.push(set.reverse().join(''));
     }
     if (index % 2 === 1) {
         returnString.push(set.join(''));
     }
 })
 
 return returnString.join('')
};