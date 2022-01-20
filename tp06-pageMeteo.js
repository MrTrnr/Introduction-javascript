function construirePage(texte) {
  let contenu = document.querySelector("#contenu");

  let data = JSON.parse(texte);

  const date = new Date();
  let heure = date.getHours();
  let minutes = date.getMinutes();

  let contenuAAjouter = `Heure : ${heure}h${minutes} <br>
  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"><br>
  Température : ${data.main.temp}°C, Description du temps : ${data.weather[0].description}<br>
  Pression : ${data.main.pressure} hPa, Vitesse du vent : ${data.wind.speed} km/h, Direction du vent : ${data.wind.deg}° `;

  contenu.innerHTML = contenuAAjouter;
}

function afficherDonnees() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=e7600d82a734460a8fc05666f3f03c12"
  )
    .then(function (reponse) {
      console.log(reponse);
      return reponse.text();
    })
    .then(function (texte) {
      console.log(texte);
      construirePage(texte);
    });
}
