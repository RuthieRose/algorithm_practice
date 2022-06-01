// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

var getDecimalValue = function(head) {
    
 let value = head.val
 
 while (head.next) {
     value = (value << 1) | head.next.val 
     head = head.next
 }
 return value
};