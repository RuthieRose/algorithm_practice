var Logger = function() {
 this.logs = {};
};

/** 
* @param {number} timestamp 
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {

 if (!this.logs[message]) {
     this.logs[message] = timestamp.toString();
     console.log(this.logs)
     return true;
 } else {
     if (timestamp - +this.logs[message] < 10) {
         console.log(this.logs)
         return false;
     } else {
         this.logs[message] = timestamp.toString();
         console.log(this.logs, 'timestamp', timestamp, 'old timestamp', this.logs[message])
         return true;
        
     }
 }

};

/** 
* Your Logger object will be instantiated and called as such:
* var obj = new Logger()
* var param_1 = obj.shouldPrintMessage(timestamp,message)
*/