// const prompt = require("prompt-sync")();

// let num = prompt("enter  :");

// let p = 0 ;
// let tab = [];
// for(let i = 0 ; i < num ; i++){
// p = p + (num - 1) + (num - 2);
// tab.push(p);
// }
// console.log(tab);


const prompt = require("prompt-sync")();

let num = prompt("Enterez un nomber: ");

let f = [0, 1, 2];

for (let i = 3; i <= num; i++) {
  f[i] = f[i - 1] + f[i - 2];
}

console.log("nomre de combinason:", f[num]);
