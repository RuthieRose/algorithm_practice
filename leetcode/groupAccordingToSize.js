// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

var groupThePeople = function(groupSizes) {
 let groups = {}
 for (let i = 0; i < groupSizes.length; i++) {
     if (groups[groupSizes[i]]) groups[groupSizes[i]].push(i)
     else groups[groupSizes[i]] = [i]
 }
 console.log(groups)
 let individualGroups = []

 for (let group in groups) {
  let workingGroup = []
    for (let i = 0; i < groups[group].length; i++) {
            workingGroup.push(groups[group][i])
            if (workingGroup.length == group) {
                individualGroups.push(workingGroup)
                workingGroup = []
            }
        }
 
    }
    
 return individualGroups
};