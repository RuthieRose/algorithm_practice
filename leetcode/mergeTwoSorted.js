class ListNode {
 constructor(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
 }

}

  let list1 = new ListNode(1,2,4)
  let list2 = new ListNode(1,3,4)

  var mergeTwoLists = function(list1, list2) {
    
   let start = new ListNode()
   let dummy = start

   while (list1 && list2) {
    if (list1.val <= list2.val) {
     start.next = list1
     list1 = list1.next
    } else {
     start.next = list2
     list2 = list2.next
    }
    start = start.next
   }

   if (!list1) {
    start.next = list2
   } else {
    start.next = list1
   }

   return dummy.next
   }

  

  mergeTwoLists(list1, list2)