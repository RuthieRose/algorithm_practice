// https://leetcode.com/problems/design-parking-system/

var ParkingSystem = function(big, medium, small) {
 this.carSpaces = {
     1: big,
     2: medium,
     3: small
 }
 
};

/** 
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function(carType) {
  if (this.carSpaces[carType] >= 1) {
      this.carSpaces[carType]--;
      return true;
  }
  else return false;
};

