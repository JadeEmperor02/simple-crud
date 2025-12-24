const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("./routes/auth");
const product = require("./routes/product");
const products = require("./routes/products");
require("dotenv").config();

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/signup", auth);
app.use("/api/product", product);
app.use("/api/products", products);

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("listening on port 5000.....");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
