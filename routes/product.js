const express = require("express");
const router = express.Router();
const Models = require("../Model");

router.get("/", async (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const perPage = parseInt(req.query.perPage) || 2;
  const name = req.query.name || "";
  const id = req.query.id || "";

  const filter = { libelle: { $regex: name } };

  if (id) filter._id = id;

  res.json(
    await Models.Product.find(filter)
      .limit(perPage)
      .skip(offset * perPage)
  );
});

module.exports = router;
