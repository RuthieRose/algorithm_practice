// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function(seats, students) {
 seats = seats.sort((a,b) => a - b)
 students = students.sort((a,b) => a -b)
 
 let moves = 0;
 
 for (let i = 0; i < seats.length; i++) {
     if (seats[i] !== students[i]) {
         moves += Math.abs(seats[i] - students[i])
         students[i] = seats[i]
     }
 }
 return moves;
};