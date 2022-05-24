// https://leetcode.com/problems/goal-parser-interpretation/

var interpret = function(command) {
 return command.replaceAll("()", "o").replaceAll("(al)", "al")
};