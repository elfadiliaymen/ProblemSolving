let pre = [1, 2, 3] ;

for(let i = pre.length - 1 ; i >= 0 ; i--){
  pre.push(pre[i]);
}
console.log(pre);