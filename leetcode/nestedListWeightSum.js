// https://leetcode.com/problems/nested-list-weight-sum/

var depthSum = function (nestedList) {

 let sum = 0

 let stack = []

 while (nestedList.length) {
  let depth = 1

  let item = nestedList.pop()
  if (!item.isInteger()) {
   stack.push({ depth: depth + 1, list: item.getList() })

  }

  if (item.isInteger()) {
   sum += depth * item.getInteger()
  }
 }

 while (stack.length) {

  let item = stack.pop()
  let depth = item.depth
  let list = item.list

  for (let i = 0; i < list.length; i++) {

   let elem = list[i]
   if (elem.isInteger()) {
    sum += depth * elem.getInteger()
   }
   else {
    stack.push({ depth: depth + 1, list: elem.getList() })
   }

  }

 }

 return sum

};