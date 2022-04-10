// https://leetcode.com/problems/baseball-game/

var calPoints = function(ops) {
    
 let scoreStack = [];
 
 for (let op of ops) {
    if (op.match(/\d/)) scoreStack.push(+op);
    if (op == "+") scoreStack.push(scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2]);
    if (op == "D") scoreStack.push(scoreStack[scoreStack.length - 1]*2);
    if (op == "C") scoreStack.pop();
 }
 return scoreStack.reduce((a,b) => a + b);
 
};