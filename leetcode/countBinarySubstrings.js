var countBinarySubstrings = function(s) {
    
 // equal number of 0 and 1 that are grouped together
 // duplicates count
 
 let sArray = s.toString(2).split('');
 let strings = 0;
 zeroes = 0;
 ones = 0;
 prevChar = null;
 
 while (sArray.length > 0) {
     
     let char = sArray.shift();
     
     if (char === '0') {
         
         if (prevChar === '1' || prevChar === null) {
             zeroes = 1;
             if (zeroes <= ones) strings++ 
         }
         
         if (prevChar === '0') {
             zeroes++;
             if (zeroes <= ones) strings++        
         }
     }
     
     else if (char === '1') {
         
         if (prevChar === '0' || prevChar === null) {
             ones = 1;
             if (ones <= zeroes) strings++ 
         }
         if (prevChar === '1') {
             ones++;
             if (ones <= zeroes) strings++
         }
     }
     
     prevChar = char;
 }
 

 return strings;
 
};