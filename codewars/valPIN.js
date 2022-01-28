function validatePIN (pin) {
 let re = /^\d{4}$|^\d{6}$/;
 return re.test(pin);
}

console.log(validatePIN('-123456'));
console.log(validatePIN('3m56'));