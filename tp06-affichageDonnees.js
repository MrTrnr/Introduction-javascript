function construireContenu(donnees) {
  console.log("fonction condtuire contenu");

  let contenu = document.querySelector("#contenu");

  contenu.innerHTML = `${donnees}`;
}

function afficherContenu() {
  fetch("https://restcountries.com/v3.1/all")
    .then(function (reponse) {
      if (reponse.status != 200) {
        throw "La requête n'a pas abouti";
      }

      return reponse.text();
    })
    .then(function (donnees) {
      console.log(donnees);
      construireContenu(donnees);
    })
    .catch(function (erreur) {
      console.log(erreur);
    });
}
