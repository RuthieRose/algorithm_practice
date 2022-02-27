var reverse = function(x) {
  
 let xRev;

 if (x >= 0) {
  xRev = parseInt(x.toString().split('').reverse().join(''));
 }

 else if (x < 0) {
  xRev = - parseInt(x.toString().split('').reverse().join(''));
 }
 

 if (xRev < ((-2) ** 31) || xRev >= 2 ** 31) return 0;
 else return xRev;
    
};

console.log(reverse('01'))