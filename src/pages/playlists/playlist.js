const express = require("express");
const router = express.Router();

const playlists = {
  featured001: [
    {
      id: "Far Cry Classic",
      name: "Far Cry Classic",
      thumbnail:
        "https://www.zastavki.com/pictures/1280x720/2008/Games_far_cry_007167_26.jpg",
    },
  ],
  featured002: [
    {
      id: "Assassin's Creed III Remastered",
      name: "Assassin's Creed III Remastered",
      thumbnail:
        "https://i.ytimg.com/vi/x0tguNWiuu4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCfhJgmVp6ApBFGKZ2B6s1dU7Kxg",
    },
    {
      id: "Assassin's Creed Valhalla",
      name: "Assassin's Creed Valhalla",
      thumbnail:
        "https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg",
    },
    {
      id: "Assassin's Creed Rogue",
      name: "Assassin's Creed Rogue",
      thumbnail:
        "https://c4.wallpaperflare.com/wallpaper/138/449/106/assassins-creed-rogue-wallpaper-preview.jpg",
    },
  ],
  featured003: [
    {
      id: "AlanWake",
      name: "Alan Wake",
      thumbnail:
        "https://www.finalfaqs.com.br/wp-content/uploads/2020/12/Alan-Wake.jpg.webp",
    },
  ],
  featured004: [],
  featured005: [],
};

router.get("/playlists", (req, res) => {
  res.json(playlists);
});

module.exports = router;
