var mySqrt = function(x) {
    let sqrt = 0;
    while (sqrt*sqrt <= x) {
      if (sqrt * sqrt === x) return sqrt;
      else sqrt++;
    }
    return sqrt * sqrt > x ? sqrt-=1 : sqrt;
};

console.log(mySqrt(8))