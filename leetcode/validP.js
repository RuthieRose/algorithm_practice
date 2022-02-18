var isPalindrome = function(s) {
    if (s.length === 1) return true;

    s = s.replace(/[^0-9a-zA-Z]/g, '');
    s = s.toLowerCase()

    if (s.length === 0 || s.length === 1) return true;

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
     if (s[i] === s[j]) {
      i++
      j--
     } else return false;
    }
    return true;
};

console.log(isPalindrome('aa'))