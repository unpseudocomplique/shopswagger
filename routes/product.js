const express = require("express");
const router = express.Router();
const Models = require("../Model");

router.get("/", async (req, res) => {
  const offset = req.query.offset || 0 ;
  const perPage = req.query.perPage || 2 ;
  const filter = {};
  res.json(await Models.Product.find(filter)).limit(perPage).skip(offset*perPage);
});

module.exports = router;
