const express = require("express");
const router = express.Router();
const PlayerProfile = require("../models/players");

// GET player profile by user ID
router.get("/:id", async (req, res) => {
  try {
    const player = await PlayerProfile.findById(req.params.id).populate("user", "email");
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
