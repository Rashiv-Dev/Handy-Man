const router = require("express").Router();
const { Ad } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newAd = await Ad.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newAd);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
