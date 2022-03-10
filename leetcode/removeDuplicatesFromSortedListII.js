var deleteDuplicates = function(head) {
    
 if (head === null) return head;
 
 let dummy = new ListNode(null, head);
 
 let node = dummy;
 let duplicateVal = -101;
 
 // have to catch the duplicate val before so it can be skipped
 while (node.next && node.next.next) {
     if (node.next.val === duplicateVal) {
         node.next = node.next.next;
     } else if (node.next.val === node.next.next.val) {
         duplicateVal = node.next.val;
         node.next = node.next.next;
     } else node = node.next;
 }
 
 if (node.next) {
     if (node.next.val === duplicateVal) {
         node.next = null;
     }
 }
 
 return dummy.next;
};