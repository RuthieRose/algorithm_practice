// https://leetcode.com/problems/subdomain-visit-count/

var subdomainVisits = function(cpdomains) {
    
 let subdomains = {}
 
 cpdomains.forEach(domain => {
     domain = domain.split(' ')
     let count = +domain[0]
     
     let subs = domain[1].split('.').reverse()
     let base = subs[0]
     
     let combinations = [base]
           
     for (let i = 1; i < subs.length; i++) {
         
         let addend = subs[i]
         base = addend +'.'+ base
         combinations.push(base)
     }
     
     combinations.forEach(sub => {
          if (subdomains[sub]) {
             subdomains[sub]+=count
         }
         else subdomains[sub] = count
     })
        
 })
 
 let output = []
 let combinations = Object.entries(subdomains)
 
 combinations.forEach(entry => {
     let count = entry[1].toString()
     let domain = entry[0]
     
     output.push(`${count} ${domain}`)
 })
 
 return output
};