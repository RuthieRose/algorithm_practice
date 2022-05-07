// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/

var printLinkedListInReverse = function(head) {
 
 // queues up values
 if (head.getNext()) {
     printLinkedListInReverse(head.getNext());
 }
 // once all are stacked then begins return
 return head.printValue();
};