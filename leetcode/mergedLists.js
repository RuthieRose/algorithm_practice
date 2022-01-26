var mergeTwoLists = function(l1, l2) {
    
 let starterNode = new ListNode(-101)
    let prev = starterNode;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
          
            prev.next = l1;
            console.log("prev.next: ", prev.next)
            prev = l1;
            console.log("prev", prev)
            l1 = l1.next;
            console.log("l1", l1.next)

        } else if (l1.val > l2.val) {
            prev.next = l2;
            console.log("prev.next: ", prev.next)
            prev = l2;
            console.log("prev", prev)
            l2 = l2.next;
            console.log("l1", l1.next)
        }
    }
    
    if(!l1) {
        prev.next = l2;
    } else {
        prev.next = l1;
    }
    
    console.log("starterNode.next: ", starterNode.next)
    return starterNode.next;
    
};
console.log(mergeTwoLists([1,2,4],[1,3,4]));