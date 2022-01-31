function duplicateCount(text){
 text = text.toUpperCase();
 let seen = {};
 let count = 0;
 for (let i = 0; i < text.length; i++) {
   let char = text[i];
   if (!seen[char]) seen[char] = true;
   else if (seen[char] === true) {
    count++;
    seen[char] = 'counted'
   }
 }
 console.log(seen)
 return count;
}

console.log(duplicateCount("Indivisibility"))