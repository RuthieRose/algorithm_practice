var reformatDate = function(date) {
 let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 date = date.split(' ');
 
 let day = parseInt(date[0]).toString();
 if (day.length === 1) day = `0${day}`
 
 
 let month = (months.indexOf(date[1])+1).toString();
 if (month.length ===1) month = `0${month}`
 
 
 let year = date[2]
 
 return `${year}-${month}-${day}`
};