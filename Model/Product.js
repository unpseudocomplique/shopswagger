const mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  libelle: String,
  price: Number,
  tags: [String],
});

// Compile model from schema
var Product = mongoose.model("product", ProductSchema, "product");

module.exports = Product;
