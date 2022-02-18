class Group {
 constructor() {
  this.members = [];
 }

 add(val) {
  if (!this.has(val)) {
   this.members.push(val);
  }
 }

 delete(val) {
  this.members = this.memebers.filter(v => v !== val);
 }

 has(val) {
  return this.members.includes(val);
 }
 static from(collection) {
  let group = new Group;
  for (let value of collection) {
   group.add(value);
  }
  return group;
 }

 [Symbol.iterator]() {
  return new GroupIterator(this);
 }
}

class GroupIterator {
 constructor(group) {
  this.group = group;
  this.position = 0;
 }

 next() {
  if (this.position >= this.group.members.length) {
   return {done: true};
  } else {
   let result = {value: this.group.members[this.position], done: false};
   this.position++;
   return result;
  }
 }
}

 for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
 }
