const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let playersSchema = new Schema({
  id: String,
  server: String,
  nickname: {
    type: String,
    required: [true, "el nick del jugador es necesario!"],
    unique: true,
  },
  hunt: {
    type: Boolean,
    default: false,
  },
  isOn: {
    type: Boolean,
    default: true,
  },
  planets: [
    {
      id: String,
      name: String,
      coords: String,
      planetType: String,
      activities: [
        {
          date: Date,
          lastActivity: String,
        },
      ],
      active: {
        type: Boolean,
        default: true,
      },
    },
  ],
  notes: String,
});

module.exports = mongoose.model("Players", playersSchema);
