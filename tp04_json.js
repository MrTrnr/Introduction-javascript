let entreprise = {
  Nom: "Google",
  "Siège social": "Googleplex, Mountain View, California, United States",
  Fondateurs: [
    {
      nom: "Larry Page",
      date: "né le 26/03/1973",
      lieu: "à East Lansing, Michigan",
    },
    {
      nom: "Sergey Brin",
      date: "né le 21/08/1973",
      lieu: "à Moscou, Union Soviétique",
    },
  ],
  chiffredaffaires: [
    { année: "2008", ca: "16.49" },
    { année: "2012", ca: "37.97" },
    { année: "2016", ca: "89.46" },
    { année: "2018", ca: "136.2" },
  ],
};
for (let i = 0; i < entreprise.Fondateurs.length; i++) {
  console.log(entreprise.Fondateurs[i].nom);
  console.log(entreprise.Fondateurs[i].date);
  console.log(entreprise.Fondateurs[i].lieu);
}

for (let i = 0; i < entreprise.chiffredaffaires.length; i++) {
  console.log(entreprise.chiffredaffaires[i].année);
  console.log(entreprise.chiffredaffaires[i].ca);
}
