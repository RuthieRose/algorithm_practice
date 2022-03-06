var mergeKLists = function(lists) {
    
 if (lists.length === 0) return null;
 if (lists.length === 1) return lists[0];
 // if (lists.length === 2 && lists[0] === null && lists[1] === null) return lists[0];
 if (lists.every(list => list === null)) return lists[0];
 
 let values = [];
 let returnList = [];
 
 for (let i = 0; i < lists.length; i++) {
     node = lists[i];
     while (node) {
         values.push(node.val);
         node = node.next
         console.log(node, values)
     }
 }
 
 values.sort((a,b) => a - b)
 
 while (values.length > 0) {
     let val = values.shift();
     let newNode = new ListNode(val, null)
     returnList.push(newNode)
 }
 
 for (let i = 0; i < returnList.length - 1; i++) {
     returnList[i].next = returnList[i+1]
 }

 
 return returnList[0]
};