/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  if (k === 0) return head;
  if (head === null || head.next === null) return head;
  
  // find the new start node and set as head.
  // find the new end node and set that node's next to null
  
  // get length
  let count = 0;
  
  let node = head;
  
  while (node) {
      node = node.next;
      count++
  }
  
  console.log(count)
  
  if (k === count || k % count === 0) {
      return head;
  } else if (k > count) {
      k = k % count;
  }
  
  
  // prep for new head
  
  let getNewHeadCount = count - k;
  
  node = head;
  
  while (getNewHeadCount > 0) {
      node = node.next;
      getNewHeadCount--;
  }
  
  console.log(node)
  
  let dummy = new ListNode(null, node)
  console.log(dummy)
  
  // set new end to null
  
  node = head;
  
  count -= k;
  
  while (count > 1) {
      node = node.next;
      count--
  }
  node.next = null
  
  // set new head and return 
  
  node = dummy.next;
  
  while (k > 1) {
      node = node.next;
      k--
  }
  
  node.next = head;
  
  head = dummy.next;
  
  return head;
 
};