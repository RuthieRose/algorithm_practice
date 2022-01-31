function isIsogram(str){
 if (str === '') return true;
 if (str.length > 26) return false;

 str = str.toLowerCase();

 let seen = {};

 for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (!seen[letter]) seen[letter] = 1;
  else seen[letter]++
 };

 return !Object.values(seen).some(item => item > 1);
}

console.log(isIsogram('aba'))