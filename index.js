const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("./routes/auth");
const product = require("./routes/product");
const products = require("./routes/products");

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/signup", auth);
app.use("/api/product", product);
app.use("/api/products", products);

mongoose
  .connect(
    "mongodb+srv://joshuaije3_db_user:OlLe3yuC5WkO3HHA@cluster0.gqrutwr.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("listening on port 5000.....");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
