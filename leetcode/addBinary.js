var addBinary = function(a, b) {
    let sum = []
    let carry = 0;
    let min = Math.min(a.length, b.length);
    a = a.split('');
    b = b.split('');
    let remainder = [];
 
    for (let i = 0; i < min; i++) {
      let aNum = +a.pop();
      let bNum = +b.pop();
 
      if (aNum + bNum + carry === 0) {
        sum.unshift(0);
      }
      else if (aNum + bNum + carry === 1) {
        sum.unshift(1);
        carry = 0;
      }
      else if (aNum + bNum + carry >= 2) {
        sum.unshift((aNum + bNum + carry) % 2);
        carry = Math.floor((aNum + bNum + carry)/2);
      }
    }
      if (a.length > 0) remainder = a.slice();
      else if (b.length > 0) remainder = b.slice();
      
 
       while (remainder.length > 0) {
         let num = +remainder.pop();
         if (num + carry === 0 || num + carry === 1) {
           sum.unshift(num + carry);
           carry = 0;
         } else {
           sum.unshift((num + carry) % 2);
           carry = Math.floor((num + carry)/2);
         }
       }
     
 
      if (carry > 0) sum.unshift(1)
      return sum.join('')
    }