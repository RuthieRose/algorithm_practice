// https://leetcode.com/problems/reverse-linked-list/

//iterative

class Solution {
 public ListNode reverseList(ListNode head) {
     
     if (head == null) return head;
     
     ListNode current = head;
     ListNode next = current.next;
     ListNode previous = null;
     current.next = previous;
     
     while (next != null) {
         previous = current;
         current = next;
         next = next.next;
         current.next = previous;
     }
     
     return current;
 }
}

// recursive

class Solution {
 public ListNode reverseList(ListNode head) {
     
     if (head == null || head.next == null) return head;
     
     ListNode current = reverseList(head.next);
     
     head.next.next = head; //this changes the neighbor's next pointer to point at the current node 
     head.next = null; // this clears the pointer to be reversed because it will be set by the next call
     return current;
 }
}