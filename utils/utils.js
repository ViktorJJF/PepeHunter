const Galaxies = require("../models/Galaxies");
const universe = require("../universe.json");
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let msToTime = (duration) => {
  console.log("llego esta duracion: ", duration);
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return (
    (hours != 1 ? hours + " horas " : hours + " hora ") +
    minutes +
    " minutos " +
    seconds +
    " segundos"
  );
};

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getPlayerInfo(playerName) {
  let planets = [];
  let playerId = "";
  let realPlayerName = "";
  let galaxies = universe;
  for (const galaxy of galaxies) {
    for (const solarSystem of galaxy.solarSystem) {
      for (const planet of solarSystem) {
        if (
          planet.playerName &&
          planet.playerName.toLowerCase() == playerName.toLowerCase()
        ) {
          // pusheando planeta con el formato adecuado
          playerId = planet.playerId;
          realPlayerName = planet.playerName;
          planets.push({
            id: "",
            name: planet.name,
            coords: planet.coords,
            planetType: "planet",
            active: true,
            activities: [],
          });
          if (planet.moon) {
            planets.push({
              id: "",
              name: "Luna",
              coords: planet.coords,
              planetType: "moon",
              active: true,
              activities: [],
            });
          }
        }
      }
    }
  }
  return { id: playerId, nickname: realPlayerName, planets };
}

module.exports = {
  timeout,
  msToTime,
  Random,
  getPlayerInfo,
};
