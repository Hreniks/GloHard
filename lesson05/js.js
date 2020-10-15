'use strict';
let arr = ['7350','5560','3872','2845','3641','4283','4444'];
for (const i of arr) {
    if (i.startsWith(2) || i.startsWith(4)) console.log(i);
}

a:
for (let i = 1; i <= 100; i++) {
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0){ 
            
            continue a;
        }
    }
    console.log(i,'Делители этого числа: ' + 1 + ' и ' + i);
}