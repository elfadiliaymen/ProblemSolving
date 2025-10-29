let voy = ["a", "e", "i","o","u"];


let entrée = "development" ;
 c = 0;
for(let i=0 ; i<entrée.length ; i++ ){
    for(let j = 0 ; j< voy.length ; j++ ){
        if(entrée[i] == voy[j]){
          c = c + 1;
        }
    }
}

console.log(c);