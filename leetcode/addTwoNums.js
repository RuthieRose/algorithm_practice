var addTwoNumbers = function(l1, l2) {
 let l1Nums = [];
 let l2Nums = [];
 let newList = [];
 let carry = 0;
 let newLinkedList = [];

 // get l1 nums
 
 while (l1 !== null) {
   l1Nums.push(l1.val)
   l1 = l1.next;  
  }
 
 // get l2 nums 
 
 while (l2 !== null) {
   l2Nums.push(l2.val)
   l2 = l2.next; 
  }
 
 // add and push the result to the new array
 
 while (l1Nums.length > 0 && l2Nums.length > 0) {
     
     let l1Num = l1Nums.shift();
     let l2Num = l2Nums.shift();
     
     let sum = l1Num + l2Num + carry;
     
     if (sum < 10) {
         newList.push(sum);
         carry = 0;
     } else {
         newList.push(sum % 10);
         carry = Math.floor(sum / 10);
     }
 }
 
 while (l1Nums.length > 0 || l2Nums.length > 0) {
    if (l1Nums.length > 0) {
    let sum = l1Nums.shift() + carry;
      if (sum < 10) {
         newList.push(sum);
         carry = 0;
         } else {
         newList.push(sum % 10);
         carry = Math.floor(sum / 10);
         }
    
     } else if (l2Nums.length > 0) {
       let sum = l2Nums.shift() + carry;
       if (sum < 10) {
             newList.push(sum);
             carry = 0;
         } else {
             newList.push(sum % 10);
             carry = Math.floor(sum / 10);
         }
     }  
 }

 while (carry > 0) {
     if (carry < 10) {
         newList.push(carry);
         carry = 0;
     } else if (carry > 10) {
         newList.push(carry % 10);
         carry = Math.floor(sum / 10);
     }
 }
 
 while (newList.length > 0) {
   let newNode = new ListNode(+newList.shift(), null);
   newLinkedList.push(newNode)
 }

 for (let i = 0; i < newLinkedList.length-1; i++) {
    newLinkedList[i].next = newLinkedList[i+1]
 }
 
 return newLinkedList[0]
};