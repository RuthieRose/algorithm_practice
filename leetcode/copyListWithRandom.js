var copyRandomList = function(head) {
   
 let visited = new Map();
 
 function copyList(node) {
    if (node === null) return null;
     
    if (visited.has(node)) return visited.get(node);       
  
    let val = node.val;
    let newNode = new Node(val);
     
    visited.set(node, newNode);
    newNode.next = copyList(node.next);
    newNode.random = copyList(node.random);
    return newNode;
    
 }
 
 return copyList(head);

};