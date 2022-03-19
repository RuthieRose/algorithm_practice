var addStrings = function(num1, num2) {
    
 if (num1 == 0 && num2 == 0) return "0";
 
 let result = [];
 
 let carry = 0;

 let pointer1 = num1.length -1;
 let pointer2 = num2.length -1;
 
 while (pointer1 >= 0 && pointer2 >= 0) {
     
     let digit1 = parseInt(num1[pointer1]);
     let digit2 = parseInt(num2[pointer2]);
     
     let num = digit1 + digit2 + carry;
     
     let pushNum = num % 10;
     
     carry = Math.max(0, ((num - pushNum)/10));
     result.push(pushNum);
     pointer1--;
     pointer2--;
 }
 
 if (num1.length === num2.length) {
     while (carry >0) {
         let num = carry % 10;
         carry = (carry - num)/10;
         result.push(num);
     }
 }
 
 else if (num1.length > num2.length) {
     while (pointer1 >= 0) {
         let num = carry + parseInt(num1[pointer1]);
         let pushNum = num % 10;
         carry = Math.max(0, ((num - pushNum)/10));
         result.push(pushNum);
         pointer1--
     }
       while (carry >0) {
         let num = carry % 10;
         carry =Math.max(0, ((carry-num)/10));
         result.push(num);
     }
 } 
 
 else {

     while (pointer2 >= 0) {
         let num = carry + parseInt(num2[pointer2]);
         let pushNum = num % 10;
         carry = Math.max(0, ((num - pushNum)/10));
         result.push(pushNum);
         pointer2--;
     }
       while (carry >0) {
         let num = carry % 10;
         carry = Math.max(0, ((carry-num)/10));
         result.push(num);
     }
 }
 
 return result.reverse().join('');
};

