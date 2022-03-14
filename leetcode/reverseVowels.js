var reverseVowels = function(s) {
    let sArray = s.split('');
     
    let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let vowels = {};

    for (let i = 0; i < sArray.length; i++) {
     let char = sArray[i];
     if (vowelArray.indexOf(char) !== -1) {
      vowels[i] = char;
     }
    }

    let reverseOrder = Object.keys(vowels).reverse();
    let inOrder = Object.keys(vowels);

    for (let i = 0; i < reverseOrder.length; i++) {
     sArray[reverseOrder[i]] = vowels[inOrder[i]]
    }

    return sArray.join('');
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));