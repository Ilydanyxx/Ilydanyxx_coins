const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const product = await Product.create({ name, description, price, imageUrl });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
