var removeElements = function(head, val) {
    
 let dummy = new ListNode(null, head)  
 let remove = []; 
 let node = dummy; 
 let count = 0; 
 
 while (node) {
    
     if (val === node.val) {
         remove.push(count);
     }       
     count++
     node = node.next;
 }
 
 console.log(remove)

 function scanForVal(node) {
   
     let place = 0;
     let idx = remove.pop();

     while (node) {

         if (idx - 1 === place && node.next.next) {
             node.next = node.next.next;
             break;
         } else if (idx - 1 === place) {
             node.next = null;
             break;
         }

         node = node.next;
         place++
     }
 }

 while (remove.length > 0) {
     scanForVal(dummy)
 }

 return dummy.next;
 
};