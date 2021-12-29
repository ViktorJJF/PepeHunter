const mongoose = require("mongoose");
const config = require("../utils/utils");

mongoose.connect(
  "mongodb://ViktorJJF:Sed4cfv52309$@jfbotscluster-shard-00-00.88rtm.mongodb.net:27017,jfbotscluster-shard-00-01.88rtm.mongodb.net:27017,jfbotscluster-shard-00-02.88rtm.mongodb.net:27017/pepeBot?ssl=true&replicaSet=JFBotsCluster-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
  async (err, res) => {
    if (err) throw err;
    console.log("DB online ONLINE");
    let planets = await config.getPlayerPlanets("ovettoCattiVo");
    console.log(planets);
  }
);
