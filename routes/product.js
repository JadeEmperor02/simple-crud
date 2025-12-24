const express = require("express");
const router = express.Router();

const {
  getById,
  updateById,
  deleteById,
} = require("../controllers/products.js");

// get by id

router.get("/:id", getById);

// update a product

router.put("/:id", updateById);

// delete a product
router.delete("/:id", deleteById);

module.exports = router;
