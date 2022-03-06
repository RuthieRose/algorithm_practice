var removeNthFromEnd = function(head, n) {

 if (head.next === null) return null;

 let dummy = new ListNode(0, head);
 
 // get count
 
 let node = head;
 let length = 0;
 
 while (node !== null) {
     length++
     node = node.next;
 }

 length -= n;
 
 node = dummy;
 
 while (length > 0) {
     length--;
     node = node.next;
 }

 node.next = node.next.next;
 return dummy.next;
 
};