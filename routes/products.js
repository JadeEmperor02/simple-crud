const express = require("express");
const router = express.Router();
const { getAllProduct, addProduct } = require("../controllers/products.js");

// get all products

router.get("/", getAllProduct);

// add a product

router.post("/", addProduct);

module.exports = router;
