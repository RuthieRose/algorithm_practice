var validWordAbbreviation = function(word, abbr) {
    let i = word.length - 1;
    let j = abbr.length - 1;
    let priorNum = false;

    while (i > -1) {

     if (abbr[j] == 0) {
      console.log(abbr[j], abbr[j-1])
      if (abbr[j-1] != 1 && abbr[j-1] !=2) return false;
     }

     if (abbr[j] == 0 || abbr[j] == 1 ||  abbr[j] == 2 ||  abbr[j] == 3 ||  abbr[j] == 4 ||  abbr[j] == 5 ||  abbr[j] == 6 ||  abbr[j] == 7 ||  abbr[j] == 8 ||  abbr[j] == 9) {
      if (priorNum) return false;
      if (abbr[j-1] == 0) return false;
      if (abbr[j-1] == 1) {

       if (i+1 >= parseInt(abbr[j-1]+abbr[j])) {
        console.log(i, parseInt(abbr[j-1]+abbr[j]))
        console.log('did it here tho')
        i -= parseInt(abbr[j-1]+abbr[j]);
        j -= 2;
        priorNum = true;
       } else return false;

       } else if (abbr[j-1] == 2) {
       if (i >= 20) {
        i -= 20;
        j -= 2;
        priorNum = true;
       }
      } else if (i+1 >= abbr[j]) {
       i -= parseInt(abbr[j]);
       j -= 1;
       priorNum = true;
      } else return false;
     } else {
      console.log(word[i], abbr[j])
      if (word[i] === abbr[j]) {
       i--;
       j--;
       priorNum= false;
      } else return false;
     }
    }

    if (j > -1) return false;
    else return true;
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n'))
console.log(validWordAbbreviation('a', '2'))
console.log(validWordAbbreviation('hi', 'h2'))
console.log(validWordAbbreviation('hi', '11'))
console.log(validWordAbbreviation('word', 'w02d'))
console.log(validWordAbbreviation('abbreviation', 'a010n'))
console.log(validWordAbbreviation('abbreviation', 'a10n'))
console.log(validWordAbbreviation("aaaaaaaaaaaaaaaaaaa","145"))