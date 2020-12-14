require("dotenv").config();
const express = require("express");
var helmet = require("helmet");
var cors = require("cors");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to mongo server.");
});

//Define a schema
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  libelle: String,
  price: Number,
  tags: [String],
});

// Compile model from schema
var Product = mongoose.model("product", ProductSchema, "product");

app.get("/", async (req, res) => {
  const filter = {};
  res.json(await Product.find(filter));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
