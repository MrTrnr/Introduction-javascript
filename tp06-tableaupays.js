function construireTableau(texte) {
  let contenu = document.querySelector("#contenu");

  let data = JSON.parse(texte);

  contenuAAjouter = "<table>";
  contenuAAjouter += `<caption>Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}</caption>`;
  contenuAAjouter += `<thead><tr><th></th><th>Nom</th><th>Valeur</th><th>%</th></tr></thead>`;
  contenuAAjouter += "<tbody>";
  for (let i = 0; i < data.pays.length; i++) {
    contenuAAjouter += `<tr><td><img src=" https://flagcdn.com/32x24/${data.pays[i].code}.png"></td><td>${data.pays[i].nom}</td><td>${data.pays[i].valeur}</td><td>${data.pays[i].pourcentage}</td></tr>`;
  }
  contenuAAjouter += "</tbody></table>";
  contenu.innerHTML = contenuAAjouter;
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
