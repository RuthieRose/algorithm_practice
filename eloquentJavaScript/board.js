
function createBoard(val) {
 let board = '';
 let space = ' ';
 let hash = '#';
 let firstLine = '';
 let secondLine = '';

 for (let i = 0; i < Math.floor(val/2); i++) {
  firstLine += hash+space 
  secondLine += space+hash
 }
 
 for (let i = 0; i < Math.floor(val/2); i++) {
  board += firstLine + '\n';
  board += secondLine + '\n';
 }

 console.log(board)
}

createBoard(4)