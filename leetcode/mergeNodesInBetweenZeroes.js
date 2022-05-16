// https://leetcode.com/problems/merge-nodes-in-between-zeros/

var mergeNodes = function(head) {
    
 let node = head;
 let pointer = head;
 
 while (pointer) {    

     if (pointer.val > 0) node.val += pointer.val;
     
     if (pointer.val === 0 && node.val !== 0 && pointer.next) {
         node.next = new ListNode(0, null)
         node = node.next;
     }
     else if (pointer.val === 0 && pointer.next === null && node.next !== null) node.next = null;
     pointer = pointer.next;  
 }
 
 return head;
};