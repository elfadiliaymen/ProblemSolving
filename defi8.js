let entrée = "hello";
let sortie = {};

for (let i = 0; i < entrée.length; i++) {
  let ch = entrée[i];
  if (sortie[ch]) {
    sortie[ch]++; 
  } else {
    sortie[ch] = 1; 
  }
}

console.log(sortie);