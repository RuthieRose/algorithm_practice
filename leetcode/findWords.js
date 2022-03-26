var findWords = function(words) {
    
 let rowOne = "qwertyuiop";
 
 let rowTwo = "asdfghjkl";
 
 let rowThree = "zxcvbnm";
 
 let output = [];

 
 for (let i = 0; i < words.length; i++) {
     let word = words[i];
     word = word.toLowerCase();
     let inOne = true;
     let inTwo = true;
     let inThree = true;
     
     for (let j = 0; j < word.length; j++) {
         if (!rowOne.includes(word[j])) inOne = false;
         if (!rowTwo.includes(word[j])) inTwo = false;
         if (!rowThree.includes(word[j])) inThree = false;
     }
     
     if (inOne) output.push(words[i]);
     
     if (inTwo) output.push(words[i]);
     
     if (inThree) output.push(words[i]);
 }

 
return output;
 
 
};
