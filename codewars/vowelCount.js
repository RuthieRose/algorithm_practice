function getCount(str) {
 var vowelsCount = 0;
 
 let vowelMap = {}

 function findVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
   if (vowelMap[char]) {
    vowelMap[char]++
   } else {
    vowelMap[char] = 1
   }
  }
 }

 for (let i = 0; i < str.length; i++) {
  findVowel(str[i])
 }

for (let vowel in vowelMap) {
 if (vowel) {
   vowelsCount += vowelMap[vowel]
 }
}
 
 return vowelsCount;
}

console.log(getCount('chai'))