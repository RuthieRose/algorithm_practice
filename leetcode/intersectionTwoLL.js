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