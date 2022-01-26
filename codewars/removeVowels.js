function disemvowel(str) {

 str = str.replace(/[aeiouAEIOU]/g, '')

 return str;
}

console.log(disemvowel("What are we doing here"))