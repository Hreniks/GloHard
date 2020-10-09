let num = 266219;
arr = num.toString().split('');
let result = parseInt(arr[0],10);

for (let  i = 1;  i < arr.length;  i++) result *= arr[i];
console.log("Result: ", result);

let power = result ** 3;
console.log('Power: ', power);

console.log("First 2 items: ",power.toString().substr(0,2));

