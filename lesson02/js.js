const num = 266219;
arr = num.toString().split('');
let result = 1;
//let result = parseInt(arr[0],10);
// for (let  i = 1;  i < arr.length;  i++){
   
//     result *= arr[i];

// }
arr.forEach(function(item){ result *= item});
console.log('result: ', result);

result = arr.reduce(function (op,current){ return op * current});
console.log('result: ', result);

const power = result ** 3;
console.log('Power: ', power);

console.log("First 2 items: ", power.toString().substr(0,2));

