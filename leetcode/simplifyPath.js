var simplifyPath = function(path) {
    
 let s = [];
 path = path.split('/');
 console.log(path);
  
 for (let i = 0; i < path.length; i++) {
     if (path[i] === ".." && s.length !== 0) {
         s.pop();
     } else if (path[i] !== "" && path[i] !== "." && path[i] !== "..") {
        s.push(path[i]) 
     }
 }

  s = s.join('/');
  s = '/' + s;
  return s;
};