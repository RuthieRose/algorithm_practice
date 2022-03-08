var isStrobogrammatic = function(num) {
 let sNums = ['0', '8', '2', '1']
 
 let numArr = num.split('')
 
 while (numArr.length > 1) {
     let front = numArr.shift();
     let back = numArr.pop();
     
     if (front === back) {
         if (!sNums.includes(front)) return false;
     } else if (front === '6') {
         if (back !== '9') return false;
     } else if (front === '9') {
         if (back !== '6') return false;
     } else return false;
 }

 console.log(numArr)
 if (numArr.length === 1) {
     if (numArr[0] !== '0' && numArr[0] !== '8' && numArr[0] !== '1') return false;
 }
 
 return true;
};