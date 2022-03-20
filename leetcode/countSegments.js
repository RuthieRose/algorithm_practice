var countSegments = function(s) {
 if (s === "") return 0;
 s = s.split(' ');
 s = s.filter(item => item !== '');
 
 return s.length;
};