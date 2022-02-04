function bouncingBall(h, bounce, window) {
 if (h <= 0) return -1;
 if (bounce <= 0 || bounce >= 1) return -1;
 if (window >= h) return -1;

 let count = 0;
 let ballPosition = h;
 let bounceHeight;

 while (Math.round(ballPosition) > 0) {

  // fall
  if (ballPosition > window) count++
  bounceHeight = ballPosition * bounce;
  ballPosition = 0; 

  // bounce up
  ballPosition += bounceHeight;
  if (bounceHeight > window) {
   count++;
   }
 }

 return count;
}

console.log(bouncingBall(30, .66, 1.5))