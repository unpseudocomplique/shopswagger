const express = require("express");
const router = express.Router();
const Models = require("../Model");

router.get("/", async (req, res) => {
  const quantity = req.query.quantity || 0;
  const filter = { quantity: { $gte: quantity } };
  res.json(await Models.Order.find(filter));
});

module.exports = router;
