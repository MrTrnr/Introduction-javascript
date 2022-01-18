let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let somme = 0;
for (let i = 0; i < array.length; i++) {
  somme += array[i];
}
console.log("Moyenne des éléments du tableau : " + somme / array.length);
