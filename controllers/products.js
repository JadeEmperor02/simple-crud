const Product = require("../models/product.model.js");

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    } else {
      const updatedProduct = await Product.findById(req.params.id);
      res.status(200).json({ success: true, data: updatedProduct });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, msg: "product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = {
  getAllProduct,
  addProduct,
  getById,
  updateById,
  deleteById,
};
