// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

var swapNodes = function(head, k) {
    
 if (head === null) return head;
 if (head.next === null && k === 1) return head;
 
 let dummy1 = new ListNode(null, null);
 let dummy2 = new ListNode(null, null);
 
 let node = head;
 let count = 0;
 
 while (node !== null) {
     count++;
     if (count === k) dummy1 = node;
     node = node.next;
 }
 
 dummy2 = head;
 
 for (let i = 1; i <= count - k; i++) {
     dummy2 = dummy2.next;
 }

 let temp = dummy1.val;
 dummy1.val = dummy2.val;
 dummy2.val = temp;
 return head;
 
};