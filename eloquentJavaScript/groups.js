class Group {
 constructor() {
   this.array = [];
 }

 add() {
   let args = [...arguments];
   for (let i = 0; i < args.length; i++) {
    if (!this.array.includes(args[i])) {
     this.array.push(args[i])
    }
   }
 }
  
 delete() {
  let args = [...arguments];
  for (let i = 0; i < args.length; i++) {
   if (this.array.includes(args[i])) {
    let idx = this.array.indexOf(args[i]);
    this.array.splice(idx, 1);
   }
  }
 }

 has(item) {
   return this.array.includes(item)
 }

 static from() {
  let group = new Group;
  let args = [...arguments];
  group.add(...args)
  return group
 }

}

let ahem = Group.from(1,4,6,2,3,3);
let what = new Group;
what.add(7,1,2,3)

console.log(ahem.has(4),what.has(1))