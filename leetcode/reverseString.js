
var reverseString = function(s) {
    for (let i = 0; i < Math.floor(s.length/2); i++) {
      let endTemp = s[s.length -1  - i];
      let begTemp = s[i];

      s[s.length - 1- i] = begTemp;
      s[i] = endTemp
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]))