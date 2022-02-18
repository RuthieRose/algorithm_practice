const findUnknown = (x,y,z) => {
 
 let found = false;
 let n = 1;
 while (!found) {
  
  if (n % 3 === x && n % 5 ===y && n % 7 === z) {
   found = true;
  } else n++
 }
 return n;
}

console.log(findUnknown(0,0,0))