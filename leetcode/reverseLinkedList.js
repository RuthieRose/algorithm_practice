var reverseList = function(head) {

 let curr = head
 let next 
 let prev = null

while (curr) {
   next = curr.next    
   curr.next = prev
   prev = curr
   curr = next 
 }

 return prev
};