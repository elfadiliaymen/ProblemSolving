let tab = [1, 2, 2, 3, 4, 4, 5] ;
let res = [];


for(let i = 0 ; i<tab.length ; i++){
    let exist = false;
  for(let j = 0 ; j<res.length ; j++){
    if( tab[i] === res[j]){
        exist = true;
        break;
    }
  }
     if(exist == false){
       res.push(tab[i]);
    }
}
console.log(res);