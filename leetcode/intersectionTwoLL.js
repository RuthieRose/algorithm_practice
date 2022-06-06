var getIntersectionNode = function(headA, headB) {
    
 let nodeA = headA;
 let nodeB = headB;
 
 let nodeANums = [];
 let nodeBNums = [];
 
while (nodeA) {
    nodeANums.push(nodeA.val);
    nodeA = nodeA.next;
}

while (nodeB) {
    nodeBNums.push(nodeB.val);
    nodeB = nodeB.next;
}

if (nodeANums[nodeANums.length - 1] !== nodeBNums[nodeBNums.length - 1]) return null;

let len = Math.min(nodeANums.length, nodeBNums.length)

for (let i = 0; i < len; i++) {
    if (nodeANums[nodeANums.length - 1] === nodeBNums[nodeBNums.length - 1]) {
        nodeANums.pop();
        nodeBNums.pop();
    }
}


let skipA = nodeANums.length;
let skipB = nodeBNums.length;
 
for (let i = 0; i < skipA; i++) {
    headA = headA.next;
}
 
for (let i = 0; i < skipB; i++) {
    headB = headB.next;
}
 
if (headA === headB) return headA;

while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
}

return headA;

};

// Using Map

var getIntersectionNode = function(headA, headB) {
    
    let nodes = new Map()
    let count = 0
    
    while (headA) {
        
        if (nodes.get(headA)) {
            nodes.set(headA, count)
            count++
        }
        else (nodes.set(headA, 'a'))
         
        headA = headA.next

    }
    
    while (headB) {
        
        if (nodes.get(headB)) {
            nodes.set(headB, count)
            count++
        }
        else (nodes.set(headB, 'b'))
        
        headB = headB.next
    }
    
    for (let key of nodes) {
        if (key[1] === 0) return key[0]
    }
    
    return null
    
};