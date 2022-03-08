var isAnagram = function(s, t) {
 let letters = {};
 
 for (let i = 0; i < s.length; i++) {
     let letter = s[i];
     if (letters[letter]) letters[letter]++;
     else letters[letter] = 1;
 }
 
 for (let i = 0; i < t.length; i++) {
     let letter = t[i];
     if (letters[letter]) letters[letter]--;
     else return false;
     if (letters[letter] === 0) delete letters[letter]
 }
 console.log(Object.values(letters))
 if (Object.values(letters).length > 0) return false;
 
 return true;
};