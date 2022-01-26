console.log('testing')

const romanToInt = str => {

  let num = 0;

function replace(s) {
  if (s[0] === "M") { 
    num += 1000;
    s = s.slice(1)
  
  } 
  if (s[0]+s[1] === "CM") { 
    num += 900;
    s = s.slice(2)

  }
  if (s[0] === "D") { 
    num += 500;
    s = s.slice(1)

  }
  if (s[0]+s[1] === "CD") { 
    num += 400;
    s = s.slice(2)
 
  }
  if (s[0] === "C") { 
    num += 100;
    s = s.slice(1)

  }
  if (s[0]+s[1] === "XC") { 
    num += 90;
    s = s.slice(2)

  }
  if (s[0] === "L") { 
    num += 50;
    s = s.slice(1)

  }
  if (s[0]+s[1] === "XL") { 
    num += 40;
    s = s.slice(2)

  }
  if (s[0] === "X") { 
    num += 10;
    s = s.slice(1)

  }
  if (s[0]+s[1] === "IX") { 
    num += 9;
    s = s.slice(2)

  }
  if (s[0] === "V") { 
    num += 5;
    s = s.slice(1)

  }
  if (s[0]+s[1] === "IV") { 
    num += 4;
    s = s.slice(2)

  }
  if (s[0] === "I") { 
    num += 1;
    s = s.slice(1)

  }

  str = s

}

do {
  replace(str)
} while (str !== '')


return num 
}

romanToInt("LVIII")