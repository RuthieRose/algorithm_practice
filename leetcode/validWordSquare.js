var validWordSquare = function(words) {
 let maxLength = 0;

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    maxLength = Math.max(maxLength, word.length);
}

if (maxLength !== words.length) return false;

for (let i = 0; i < words.length; i++) {
    
    if (words[i].length < maxLength) {
           words[i] = words[i].padEnd(maxLength, ' ');
    }
}

console.log(words)

let wordSmash = [];

for (let i = 0; i < words.length;i++) {
    wordSmash.push(words[i].split(''))
}

for (let i = 0; i < wordSmash.length; i++) {
    for (let j = 0; j < wordSmash[i].length; j++) {
        if (wordSmash[i][j] !== wordSmash[j][i]) {
            return false;
        }
    }
}

return true;
};