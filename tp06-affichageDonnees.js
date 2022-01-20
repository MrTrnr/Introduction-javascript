function construireContenu(texte) {
  console.log("fonction construire contenu");

  let contenu = document.querySelector("#contenu");
  let donnees = JSON.parse(texte);
  let contenuAAficher = "";
  for (let i = 0; i < donnees.length; i++) {
    contenuAAficher += `Pays : ${donnees[i].name.common} Capitale : ${donnees[i].capital} Population : ${donnees[i].population} Continent : ${donnees[i].continents}<br>`;
  }

  contenu.innerHTML = contenuAAficher;
}

function afficherContenu() {
  fetch("https://restcountries.com/v3.1/all")
    .then(function (reponse) {
      if (reponse.status != 200) {
        console.log("La requête n'a pas abouti");
      }
      return reponse.text();
    })
    .then(function (texte) {
      console.log(texte);
      construireContenu(texte);
    });
}
