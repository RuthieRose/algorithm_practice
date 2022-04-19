// https://leetcode.com/problems/corporate-flight-bookings/

var corpFlightBookings = function(bookings, n) {
    
 let totalSeats = new Array(n).fill(0)
 
 for (let i = 0; i < bookings.length; i++) {
     let booking = bookings[i];
     let seats = booking[2]
     
     for (let i = booking[0]-1; i < booking[1]; i++) {
         totalSeats[i]+=seats
     }
 }
 
 return totalSeats;
};