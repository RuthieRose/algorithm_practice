// var hasCycle = function(head) {
    
//  let curr = head
//  let count = 0
 
//  while (curr != null && count < 10001) {
//      if (curr.next == null) return false
//      curr = curr.next
//      count++
//  }
 
//  if (count >= 10001) return true
//  else return false

// };

var hasCycle = function(head) {
    
 let pointer1 = head
 let pointer2 = head
 
 while (pointer1 !== null) {
     pointer2 = pointer2.next
     if (pointer1.next === null) {
      return false 
     } else if (pointer1.next.next === null) {
      return false
     } else pointer1 = pointer1.next.next 

     if (pointer1.next === pointer2.next) return true    
 }
         
 return false

};