const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // links each profile to a registered user
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Happy Gilmore",
    },
    handicap: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    badges: {
      type: [String],
      default: [],
    },
    stats: {
      tournamentsWon: { type: Number, default: 0 },
      avgRoundTime: { type: String, default: "0h 0m" },
      homeClub: { type: String, default: "" },
    },
    skills: {
      drivingAccuracy: { type: Number, default: 0 },
      putting: { type: Number, default: 0 },
      approachShots: { type: Number, default: 0 },
      sandSaves: { type: Number, default: 0 },
    },
    achievements: [
      {
        type: {
          type: String,
        },
        description: String,
      },
    ],
    recentRounds: [
      {
        course: String,
        date: String,
        score: Number,
        par: Number,
        fairwaysHit: String,
        greensInRegulation: String,
        putts: Number,
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);
