var swapPairs = function(head) {

    
 if (head === null || head.next === null) return head;
 

 let firstNode = head;
 let secondNode = head.next;
 
 firstNode.next = swapPairs(secondNode.next)
 secondNode.next = firstNode
     
 return secondNode;
}