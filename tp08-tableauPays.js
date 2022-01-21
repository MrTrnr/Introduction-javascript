function construireTableau(texte) {
  let contenuTableau = document.querySelector("#contenuTableau");
  let emplacementTitre = document.querySelector("#contenuTitre");
  let data = JSON.parse(texte);

  let contenuTitre = `<h2>Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}</h2>`;
  emplacementTitre.innerHTML = contenuTitre;

  let contenuAAjouter = `<table class="table">`;
  contenuAAjouter += `<thead><tr><th></th><th>Nom</th><th>Valeur</th><th>%</th></tr></thead>`;
  contenuAAjouter += `<tbody>`;

  for (let i = 0; i < data.pays.length; i++) {
    contenuAAjouter += `<tr><td><img src="https://flagcdn.com/32x24/${data.pays[i].code}.png"></td>
    <td>${data.pays[i].nom}</td><td>${data.pays[i].valeur}</td><td>${data.pays[i].pourcentage}</td></tr>`;
  }
  contenuAAjouter += `</tbody></table>`;
  contenuTableau.innerHTML = contenuAAjouter;
}

function afficherDonnees() {
  fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function (reponse) {
      if (reponse.status != 200) {
        console.log("La requête n'a pas abouti");
      }
      return reponse.text();
    })
    .then(function (texte) {
      construireTableau(texte);
    });
}

function selectionNombre(nomChamp) {
  let saisie = document.querySelector("input[name='" + nomChamp + "']").value;

  try {
    //la saisie contient autre chose que des nombres
    if (isNaN(saisie) && saisie != "") {
      throw "vous devez saisir un nombre";
      //la saisie n'est pas vide et contient des nombres
    } else if (saisie != "") {
      return parseFloat(saisie);
      //la saisie ne contient rien et concerne le champ minimum
    } else if (nomChamp == "minimum") {
      return 0;
    }
    //par déduction la saisie ne contient rien et concerne le champ maximum
    else {
      return Number.MAX_VALUE;
    }
  } catch (error) {
    let element = document.querySelector("#affichageErreur");
    element.innerHTML =
      "<span style='background-color:red'>" + error + "</span>";
  }
}

function traiterNombres() {
  let premierNombre = selectionNombre("minimum");
  let deuxiemeNombre = selectionNombre("maximum");
  try {
    if (premierNombre > deuxiemeNombre) {
      throw "vous devez saisir un nombre minimimum inférieur à nombre maximum";
    } else if (premierNombre < 0) {
      throw "vous devez saisir un nombre minimimum positif";
    } else if (deuxiemeNombre < 0) {
      throw "vous devez saisir un nombre maximum positif";
    } else {
      return [premierNombre, deuxiemeNombre];
    }
  } catch (error) {
    let element = document.querySelector("#affichageErreur");
    element.innerHTML =
      "<span style='background-color:red'>" + error + "</span>";
  }
}

function effacerMessageErreur() {
  let element = document.querySelector("#affichageErreur");
  element.innerHTML = "<span></span>";
}

function valider() {
  effacerMessageErreur();
  let mesNombres = traiterNombres();
  afficherDonneesMinMax(mesNombres[0], mesNombres[1]);
}

function construireTableauMinMax(texte, min, max) {
  let contenuTableau = document.querySelector("#contenuTableau");
  let emplacementTitre = document.querySelector("#contenuTitre");
  let data = JSON.parse(texte);

  let contenuTitre = `<h2>Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}</h2>`;
  emplacementTitre.innerHTML = contenuTitre;

  let contenuAAjouter = `<table class="table">`;
  contenuAAjouter += `<thead><tr><th></th><th>Nom</th><th>Valeur</th><th>%</th></tr></thead>`;
  contenuAAjouter += `<tbody>`;

  for (let i = 0; i < data.pays.length; i++) {
    if (data.pays[i].valeur >= min && data.pays[i].valeur <= max) {
      contenuAAjouter += `<tr><td><img src="https://flagcdn.com/32x24/${data.pays[i].code}.png"></td>
    <td>${data.pays[i].nom}</td><td>${data.pays[i].valeur}</td><td>${data.pays[i].pourcentage}</td></tr>`;
    }
  }
  contenuAAjouter += `</tbody></table>`;
  contenuTableau.innerHTML = contenuAAjouter;
}

function afficherDonneesMinMax(min, max) {
  fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function (reponse) {
      if (reponse.status != 200) {
        console.log("La requête n'a pas abouti");
      }
      return reponse.text();
    })
    .then(function (texte) {
      construireTableauMinMax(texte, min, max);
    });
}
