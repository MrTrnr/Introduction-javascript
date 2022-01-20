function construireTableau(text) {
  console.log(text);
  let contenu = document.querySelector("#contenu");

  let data = JSON.parse(text);

  contenuAAjouter = "<table>";
  contenuAAjouter += `<caption>Liste des utilisateurs</caption>`;
  contenuAAjouter += `<thead><tr>
  <th>id</th>
  <th>Nom</th>
  <th>Prénom</th>
  <th>Date de naissance</th>
  <th>Lieu de naissance</th>
  <th>Département</th>
  <th>Numéro de rue</th>
  <th>Libellé de rue</th>
  <th>Code postal</th>
  <th>Ville</th>
  </tr></thead>`;
  contenuAAjouter += "<tbody>";
  for (let i = 0; i < data.length; i++) {
    contenuAAjouter += `<tr>
    <th>${data[i].id}</th>
    <th>${data[i].nom}</th>
    <th>${data[i].prenom}</th>
    <th>${data[i].dateNaissance}</th>
    <th>${data[i].lieuNaissance}</th>
    <th>${data[i].departementNaissance}</th>
    <th>${data[i].numeroRue}</th>
    <th>${data[i].libelleRue}</th>
    <th>${data[i].codePostal}</th>
    <th>${data[i].ville}</th>
    </tr>`;
  }
  contenuAAjouter += "</tbody></table>";
  contenu.innerHTML = contenuAAjouter;
}

function init() {
  fetch("https://digicode.cleverapps.io/utilisateurs")
    .then(function (response) {
      if (response.status != 200) {
        console.log("La requête n'a pas abouti");
      }
      return response.text();
    })
    .then(function (text) {
      construireTableau(text);
    });
}

function envoyer() {
  let objet = {};
  objet.nom = document.querySelector("#nom").value;
  objet.prenom = document.querySelector("#prenom").value;
  objet.dateNaissance = document.querySelector("#dateNaissance").value;
  objet.lieuNaissance = document.querySelector("#lieuNaissance").value;
  objet.departementNaissance = document.querySelector(
    "#departementNaissance"
  ).value;
  objet.numeroRue = document.querySelector("#numeroRue").value;
  objet.libelleRue = document.querySelector("#libelleRue").value;
  objet.codePostal = document.querySelector("#codePostal").value;
  objet.ville = document.querySelector("#ville").value;

  fetch("https://digicode.cleverapps.io/utilisateurs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objet),
  }).then((response) => response.text().then((text) => console.log(text)));
}
