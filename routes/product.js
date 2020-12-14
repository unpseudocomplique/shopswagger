const express = require("express");
const router = express.Router();
const Models = require("../Model");

router.get("/", async (req, res) => {
  const filter = {};
  res.json(await Models.Product.find(filter));
});

module.exports = router;
