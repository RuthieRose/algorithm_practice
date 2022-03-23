var licenseKeyFormatting = function(s, k) {
 s = s.toUpperCase().split('-').join('').split('');
 let formatted = [];
 
 let numDashes;
 let remainder = s.length % k;
 
 let count = s.length + numDashes;
  
 let i;
     
 for (i = s.length - 1; i >= 0; i--) {
 
         if (i % k === remainder && i !== 0) {      
             formatted.unshift(s[i]);
             formatted.unshift('-');
  
         } else {
             formatted.unshift(s[i]);
         }
     }
 
 formatted = formatted.join('');

 return formatted;
};