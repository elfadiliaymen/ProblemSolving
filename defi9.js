let boit = 9;
let echange = 3;


if(boit % echange == 0){
    let res = boit / echange + 1;
    console.log(res)
}else{
    let d = boit/echange;
    let res = Math.trunc(d) + 1;

    console.log(res);
}