
var findPoisonedDuration = function(timeSeries, duration) {
 
 let total = 0;

 let times = [];
 timeSeries.forEach(time => {
  times.push([time, time+duration -1])
 });

 times.forEach((time, index) => {
  if (index < times.length - 1) {
   time[1] = Math.min(time[1], times[index+1][0])
  }
 });
 
 let prevEndTime = null;

 for (let i = 0; i < times.length; i++) {
   
   if (i > 0) {
    prevEndTime = times[i-1][1];
   }

   total += times[i][1] - times[i][0] + 1;
   if (prevEndTime === times[i][0]) total--;
   
 }

 return total;

};