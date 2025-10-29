let mot = "level";
i = 0;
j= mot.length - 1;
let vo = false;

while(i < j){
    if(mot[i] == mot[j]){ 
      vo = true;
      break;
    }
    i++;
    j--;
}

console.log(vo);