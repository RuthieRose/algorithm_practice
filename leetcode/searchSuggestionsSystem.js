// https://leetcode.com/problems/search-suggestions-system/

var suggestedProducts = function(products, searchWord) {
    
 products = products.sort((a,b) => a.localeCompare(b))
 
 let results = []
 let search = ''
 
 for (let i = 0; i < searchWord.length; i++) {
     search += searchWord[i]
     let charResult = []
     let charProducts = [...products]
     while (charResult.length < 3 && charProducts.length > 0) {
         let word = charProducts.shift()
         if (word.slice(0,i+1) === search) charResult.push(word)
     }
     
     results.push(charResult)
 }
 
 return results
};