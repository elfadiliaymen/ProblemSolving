let Entrée  = [2, 4, 6, 5,-3, 7] ;

let s= 0;
for(let i = 0 ; i<Entrée.length ; i++){
   if(Entrée[i]< 0){
    break;
   }
   s = s+Entrée[i];
}

console.log(s);