const mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  quantity: Number,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  adress: {
    road: String,
    zip: Number,
    city: String,
  },
});

// Compile model from schema
var Order = mongoose.model("order", OrderSchema, "order");

module.exports = Order;
