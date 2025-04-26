const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const order = await Order.create({ user: req.user.id, products, totalPrice });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
