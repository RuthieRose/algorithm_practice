// https://leetcode.com/problems/student-attendance-record-i/

var checkRecord = function(s) {
    
 let absent = 0;
 let consecutiveLate = 0;
 
 for (let i = 0; i < s.length; i++) {
     
     let letter = s[i];
     
     if (letter === 'A') {
         absent++;
         consecutiveLate = 0;
     }
     
     if (letter === 'L') consecutiveLate++;
     
     if (letter === 'P') consecutiveLate = 0;
     
     if (absent > 1) return false;
     if (consecutiveLate > 2) return false; 
     
 }
 
 return true;
 
};