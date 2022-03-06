
var champagneTower = function(poured, query_row, query_glass) {
    // After 1 cup, [0][0] pours .5cup into [1][0] and .5 cup into [1][1]
   
    // 1 cup => [0][0] is full

    // 2 cups => [1][0] and [1][1] are half full 
    // Per 1 cup, [1][0] and [1][1] get .5 cup

    // 3 cups => [1][0] and [1][1] are full 

    // 4 cups,  row 2 is 0,1,2
    //          [2][1] gets .25 cup from [1][0] and .25 cup from [1][1]
    //          [2][0] gets .25 cup and [2][2] gets .25 cup
    // Per 1 cup, [2][0] gets .25 cup
    // Per 1 cup, [2][1] gets .5 cup
    // Per 1 cup, [2][2] gets .25 cup

    // 5 cups, [2][1] is full
    //          [2][0] is .5 cup and [2][2] is .5 cup

    // 6 cups, row 3 is 0,1,2,3
     //        [3][1] and [3][2] get .25 cup each from [2][1]
    //         [2][0] is .75 cup and [2][2] is .75 cup

    let tower = []

    for (let i = 1; i < 101; i++) {
     let glasses = [];
     for (let j = 0; j < i; j++) {
      glasses.push(j)
     }
     tower.push(glasses)
    }
    console.log(tower);
};

champagneTower()
