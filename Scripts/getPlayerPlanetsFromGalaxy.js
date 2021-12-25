const Galaxies = require("../models/Galaxies");

(async () => {
  let galaxies = await Galaxies.find();
  for (const galaxy of galaxies) {
    for (const solarSystem of galaxy.solarSystem) {
      if (solarSystem.playerId == "100144") {
        console.log("Coordenadas: ", solarSystem.coords);
      }
    }
  }
})();
