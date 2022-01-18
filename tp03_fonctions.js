//Exercice FonctionConstante
//fonction qui ne prend pas de paramètre et retourne 33
function fonctionConstante() {
  return 33;
}
let resultat = fonctionConstante();
console.log(`Le résultat de ma fonction : ${resultat}`);

//Exercice BonjourUntel
//fonction qui prend en paramètre une variable de type chaîne de caractères
function bonjourUntel(prenom) {
  if (!prenom) {
    throw "vous devez fournir une chaîne de caractères";
  }
  console.log(`Bonjour ${prenom}`);
}
try {
  bonjourUntel("Georgette");
} catch (error) {
  console.log(error);
}

//Exercice FonctionCalcul
function fonctionCalcul(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw "vous devez fournir des nombres";
  }

  console.log(`Résultat du calcul a * b + a + b : ${a * b + a + b}`);
}

try {
  fonctionCalcul(3, 7);
} catch (error) {
  console.log(error);
}

// Exercice FonctionControleTableau
function controleTableau(tableau) {
  if (!Array.isArray(tableau)) {
    throw "le paramètre doit être un tableau";
  }
  if (tableau.length != 0) {
    for (let i = 0; i < tableau.length; i++) {
      if (typeof tableau[i] != "number") {
        return false;
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(
  "[1, 2, 3] contient uniquement des nombres : " + controleTableau([1, 2, 3])
);
console.log(
  "[1, 5, 'm', 45] contient uniquement des nombres : " +
    controleTableau([1, 5, "m", 45])
);
console.log("[] contient uniquement des nombres : " + controleTableau([]));

// Exercice FonctionMoyenne

function fonctionMoyenne(tableau) {
  if (controleTableau(tableau)) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
    console.log("Moyenne des éléments du tableau : " + somme / tableau.length);
  } else if (tableau.length == 0) {
    console.log("Moyenne des éléments du tableau : 0 ");
  } else {
    throw "votre tableau ne contient pas que des nombres";
  }
}

try {
  fonctionMoyenne([1, 2, 8]);
} catch (error) {
  console.log("erreur : " + error);
}

try {
  fonctionMoyenne([1, "4", 8]);
} catch (error) {
  console.log("erreur : " + error);
}

try {
  fonctionMoyenne([]);
} catch (error) {
  console.log("erreur : " + error);
}
