const { Random, timeout, msToTime } = require("../utils/utils");
const { PendingXHR } = require("pending-xhr-puppeteer");
const Galaxy = require("../models/Galaxies");
const config = require("../config");
const Bot = require("../classes/Bot");

let scanGalaxy = async (galaxyNumber, bot) => {
  try {
    var page = await bot.createNewPage();
    const pendingXHR = new PendingXHR(page);
    // await timeout(10 * 1000);
    let solarSystemPlanets = [];
    for (let solarSystem = 0; solarSystem < 499; solarSystem++) {
      let planets = await bot.solarSystemScraping(
        `${galaxyNumber}:${solarSystem + 1}:1`,
        page,
        pendingXHR
      );
      console.log("escaneado: ", planets);
      solarSystemPlanets.push(planets);
    }
    console.log("se termino de scanear g", galaxyNumber);
    let galaxy = new Galaxy({
      server: config.SERVER,
      number: galaxyNumber,
      solarSystem: JSON.parse(JSON.stringify(solarSystemPlanets)),
    });
    await galaxy.save();
    await page.close();
  } catch (error) {
    console.log("se dio un error en scanGalaxy..probablemente el logeo");
    console.log("el error es: ", error);
    await bot.checkLoginStatus(page);
  }
};

// (async () => {
//   let bot = new Bot();
//   await bot.begin("dev");
//   await bot.login(config.USER, config.PASS);
//   await timeout(10000);
//   for (let i = 1; i <= 9; i++) {
//     await scanGalaxy(String(i), bot);
//   }
// })();

module.exports = scanGalaxy;
