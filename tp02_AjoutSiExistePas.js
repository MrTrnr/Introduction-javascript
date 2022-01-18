let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tableau2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

//je parcours le premier tableau
for (let i = 0; i < tableau1.length; i++) {
  let valeurIdentique = false;

  //je parcours le deuxième tableau
  for (let j = 0; j < tableau2.length; j++) {
    if (tableau1[i] == tableau2[j]) {
      valeurIdentique = true;
      break;
    }
  }
  //si ma valeur présente dans tableau1 est absente dans tableau2, je l'ajoute à tableau2
  if (valeurIdentique == false) {
    tableau2.push(tableau1[i]);
  }
}
console.log("tableau 2 : " + tableau2);
