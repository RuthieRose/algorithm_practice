// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    
  if (!head || !head.next) return head
  
  let current = reverseList(head.next)
  head.next.next = head
  head.next = null
  return current;
};