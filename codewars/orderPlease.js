function order(words){
 if (words === "") return "";
 wordArr = words.split(' ');
 let re = /\d/;
 wordArr = wordArr.sort((a,b) => a.match(re) - b.match(re))
 return wordArr.join(' ')
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))