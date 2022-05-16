// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
 return Math.max(...accounts.map(customer => customer.reduce((a,b) => a + b)))
};