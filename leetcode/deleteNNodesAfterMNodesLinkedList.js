// https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/

var deleteNodes = function(head, m, n) {
    
 let node = head
 
 let currNode = head
 let holdingNode = head
 
 while (currNode !== null) {
     
     for (let i = 0; i < m-1; i++) {
        if (currNode !== null) currNode = currNode.next
        else break
     }
     if (currNode === null) break
     holdingNode = currNode
     
     for (let i = 0; i <= n; i++) {
        if (currNode !== null) currNode = currNode.next 
        else break
     }

     holdingNode.next = currNode
    
 }
 
 return node
 
};