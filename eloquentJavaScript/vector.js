class Vector { 
  constructor(x,y) {
     this.x = x,
     this.y = y
  }

  plus(vec) {
     let newVec = {}
     newVec.x = this.x + vec.x;
     newVec.y = this.y + vec.y;
     return newVec;
  }

  minus(vec) {
   let newVec = {}
   newVec.x = this.x - vec.x;
   newVec.y = this.y - vec.y;
   return newVec;
  }
  
  get len(){
    let xDiff = this.x - 0;
    let yDiff = this.y - 0;

    return Math.sqrt(xDiff*xDiff + yDiff * yDiff);
  }
}

console.log(new Vector(3,4).len)