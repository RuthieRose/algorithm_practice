var constructRectangle = function(area) {
    
 let l = Math.round(Math.sqrt(area));
 let w = Math.floor(Math.sqrt(area));
 
 while (l*w !== area) {
     l++;
     w = Math.floor(area/l);
 }
 
 return [l, w]
};